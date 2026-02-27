import React, { useState, useMemo, useCallback, useEffect } from 'react';

const DYNAMIC_CONFIG = {
    // প্রতি SMS সেগমেন্টের খরচ
    COST_PER_SEGMENT_BDT: 0.40,
    COST_PER_SEGMENT_USD: 0.004,
    SMS_MAX_CHARS: 160,
};

const validateNumbers = (input) => {
    const rawNumbers = input.split(/[\n,]+/).map(num => num.trim()).filter(num => num.length > 0);

    const validatedResults = rawNumbers.map((original, index) => {
        const bdRegex = /^01[3-9]\d{8}$/;
        const isValid = bdRegex.test(original) && original.length === 11;

        return {
            id: index + 1,
            original: original,
            formatted: isValid ? original : 'N/A',
            status: isValid ? 'Valid' : 'Invalid',
        };
    });

    return validatedResults;
};

const ManualInputArea = React.memo(({ initialInput, onInputReady, onCheck }) => {
    const [localInput, setLocalInput] = useState(initialInput);

    useEffect(() => {
        setLocalInput(initialInput);
    }, [initialInput]);

    const handleLocalChange = (e) => {
        setLocalInput(e.target.value);
    };

    const handleCheckClick = () => {
        onInputReady(localInput);
        onCheck();
    };

    const isCheckDisabled = localInput.trim().length === 0;

    return (
        <div className="lg:col-span-1">
            <p className="text-sm text-gray-600 mb-2 font-medium">Enter Phone Numbers (comma or newline separated)</p>
            <textarea
                rows="12"
                value={localInput}
                onChange={handleLocalChange}
                className="w-full p-4 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none text-sm"
                placeholder="e.g., 01712345678, 01812345678"
            ></textarea>

            <button
                onClick={handleCheckClick}
                disabled={isCheckDisabled}
                className={`mt-4 w-full px-6 py-3 font-medium rounded-md shadow-md text-md transition duration-150 ease-in-out ${isCheckDisabled ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
                Check Numbers (নাম্বার যাচাই করুন)
            </button>
        </div>
    );
});


// Component 2: Step 1 Select Method
const Step1SelectMethod = React.memo(({ handleNext }) => (
    <div className="flex justify-center items-center h-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div
                onClick={() => handleNext(2)}
                className="cursor-pointer bg-white border border-green-200 hover:border-green-500 transition duration-300 rounded-xl shadow-lg p-10 text-center transform hover:scale-[1.02] active:scale-[0.98]"
            >
                <div className="inline-flex items-center justify-center h-20 w-20 mb-4 rounded-full bg-green-100 text-green-600 shadow-inner">
                    <svg className="h-10 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Upload Excel File</h3>
                <p className="mt-2 text-md text-gray-500">
                    Upload an XLSX file with phone numbers
                </p>
            </div>

            <div
                onClick={() => handleNext(3)}
                className="cursor-pointer bg-white border border-indigo-200 hover:border-indigo-500 transition duration-300 rounded-xl shadow-lg p-10 text-center transform hover:scale-[1.02] active:scale-[0.98]"
            >
                <div className="inline-flex items-center justify-center h-20 w-20 mb-4 rounded-full bg-indigo-100 text-indigo-600 shadow-inner">
                    <svg className="h-10 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Manual Entry</h3>
                <p className="mt-2 text-md text-gray-500">
                    Enter phone numbers manually
                </p>
            </div>
        </div>
    </div>
));


// Component 3: Step 2 Excel Upload
const Step2ExcelUpload = React.memo(({ handleNext }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">Step 2: Excel File Upload</h2>
            <button onClick={() => handleNext(1)} className="text-gray-400 hover:text-gray-600 transition p-2 rounded-full hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>

        <div className="border-2 border-dashed border-green-500 p-16 rounded-xl text-center bg-green-50/50 hover:bg-green-100 transition cursor-pointer">
            <input type="file" className="hidden" id="excel-upload" accept=".xlsx, .xls" />
            <label htmlFor="excel-upload" className="cursor-pointer">
                <div className="inline-flex items-center justify-center h-20 w-20 mb-4 rounded-full bg-white text-green-600 shadow-md">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                </div>
                <p className="text-xl font-bold text-green-800">Click to Browse File</p>
                <p className="text-md text-gray-500 mt-1">or drag and drop your Excel file (.xlsx)</p>
            </label>
        </div>

        <div className="flex justify-between mt-6">
            <button
                onClick={() => handleNext(1)}
                className="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-100 transition text-md"
            >
                ← Back
            </button>
            <button
                onClick={() => handleNext(4)}
                disabled
                className="px-6 py-3 bg-gray-400 text-white font-medium rounded-md shadow-md cursor-not-allowed text-md"
            >
                Process & Continue
            </button>
        </div>
    </div>
));


// Component 4: Step 3 Manual Entry
const Step3ManualEntry = React.memo(({
    manualInput, checkedInput, processedResults, invalidCount, validCount,
    handleInputReady, handleCheckNumbers, handleRemoveInvalid, handleNext
}) => {
    let previewMessage = "যাচাই করার জন্য ফোন নাম্বার লিখুন এবং 'Check Numbers' বাটনে ক্লিক করুন।";

    const hasInput = manualInput.trim().length > 0;
    const hasCheckedInput = checkedInput.trim().length > 0;

    if (processedResults.length === 0) {
        if (hasInput && !hasCheckedInput) {
            previewMessage = "নাম্বার যাচাই করার জন্য উপরে 'Check Numbers' বাটনে ক্লিক করুন।";
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-800">Step 2: Manual Entry (হাতে লেখা নাম্বার)</h2>
                <button onClick={() => handleNext(1)} className="text-gray-400 hover:text-gray-600 transition p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <ManualInputArea
                    initialInput={manualInput}
                    onInputReady={handleInputReady}
                    onCheck={handleCheckNumbers}
                />

                <div className="lg:col-span-2">
                    <div className="p-6 rounded-md border border-gray-200 bg-gray-50 mb-6">
                        <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Phone Numbers Validation Preview</h3>

                        {processedResults.length === 0 ? (
                            <div className="text-center py-10 text-gray-500">
                                <p>{previewMessage}</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="bg-green-100 p-4 rounded-md flex items-center justify-between shadow-sm">
                                        <span className="text-md font-semibold text-green-700 flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            Valid Numbers (সঠিক)
                                        </span>
                                        <span className="text-2xl font-extrabold text-green-800">{validCount}</span>
                                    </div>
                                    <div className="bg-red-100 p-4 rounded-md flex items-center justify-between shadow-sm">
                                        <span className="text-md font-semibold text-red-700 flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            Invalid Numbers (ভুল)
                                        </span>
                                        <span className="text-2xl font-extrabold text-red-800">{invalidCount}</span>
                                    </div>
                                </div>

                                {invalidCount > 0 && (
                                    <div className="text-right mb-4">
                                        <button onClick={handleRemoveInvalid} className="text-sm px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Remove {invalidCount} Invalid Numbers</button>
                                    </div>
                                )}

                                <div className="overflow-x-auto max-h-64 border rounded-md">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-200 sticky top-0">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">#</th>
                                                <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Original Number</th>
                                                <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Formatted Number</th>
                                                <th className="px-4 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-100">
                                            {processedResults.map((number) => (
                                                <tr key={number.id} className={`${number.status === 'Invalid' ? 'bg-red-50/50 hover:bg-red-100' : 'hover:bg-green-50/50'}`}>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{number.id}</td>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{number.original}</td>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{number.formatted}</td>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-center">
                                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${number.status === 'Valid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                                                            }`}>
                                                            {number.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}

                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={() => handleNext(1)}
                            className="px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-100 transition text-md"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={() => handleNext(4)}
                            disabled={invalidCount > 0 || processedResults.length === 0}
                            className={`px-6 py-3 font-medium rounded-md shadow-md text-md transition duration-150 ease-in-out ${(invalidCount > 0 || processedResults.length === 0) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                        >
                            Continue to Message Composer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});


// Component 5: Step 4 Message Composer
const Step4MessageComposer = React.memo(({
    validCount, message, onMessageChange, onSend, isSending, sendSuccess, handleNext,
    costPerSegmentUSD, costPerSegmentBDT, smsMaxChars
}) => {
    const charCount = message.length;
    const isSendDisabled = message.trim().length === 0 || validCount === 0 || isSending;

    const segments = Math.ceil(charCount / smsMaxChars) || 1;

    const totalSegmentsToSend = validCount * segments;
    const totalCostUSD = (totalSegmentsToSend * costPerSegmentUSD).toFixed(4);
    const totalCostBDT = (totalSegmentsToSend * costPerSegmentBDT).toFixed(2);

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-800">Step 3: Write & Send Message (বার্তা লিখুন ও পাঠান)</h2>
                <button onClick={() => handleNext(1)} className="text-gray-400 hover:text-gray-600 transition p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Your SMS Message</p>
                    <textarea
                        rows="8"
                        value={message}
                        onChange={onMessageChange}
                        className="w-full p-4 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none text-md"
                        placeholder="Type your message here..."
                        disabled={isSending}
                    ></textarea>

                    <div className="flex justify-between items-center text-sm mt-2 text-gray-500">
                        <span>Characters: <span className="font-bold text-gray-700">{charCount}</span></span>
                        <span>SMS Segments (Per Message): <span className="font-bold text-gray-700">{segments}</span></span>
                    </div>
                </div>

                <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Sending Summary & Cost</h3>

                    <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Total Valid Recipients:</p>
                        <p className="text-3xl font-extrabold text-indigo-600">{validCount}</p>
                    </div>

                    <div className="mb-3 border-t pt-3">
                        <p className="text-sm text-gray-600">Total SMS Segments to Send:</p>
                        <p className="text-2xl font-bold text-gray-800">{totalSegmentsToSend}</p>
                    </div>

                    <div className="mb-6 border-t pt-3">
                        <p className="text-sm text-red-600 font-bold">Estimated Total Cost (আনুমানিক খরচ):</p>
                        <p className="text-2xl font-extrabold text-red-700">
                            ${totalCostUSD} (<span className="text-green-700">৳{totalCostBDT} BDT</span>)
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Rate: ৳{costPerSegmentBDT} BDT per segment</p>
                    </div>

                    {sendSuccess && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-4" role="alert">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline"> Mock SMS sent to {validCount} recipients.</span>
                        </div>
                    )}

                    {validCount === 0 && (
                        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-md relative mb-4" role="alert">
                            <span className="block sm:inline">No valid numbers to send. Go back to Step 2.</span>
                        </div>
                    )}

                    <button
                        onClick={onSend}
                        disabled={isSendDisabled}
                        className={`w-full px-8 py-3 font-medium rounded-md shadow-xl transition text-md flex justify-center items-center ${isSendDisabled ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                    >
                        {isSending ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            'Send Bulk SMS Now'
                        )}
                    </button>

                    <div className="text-center mt-4">
                        <button
                            onClick={() => handleNext(1)}
                            className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-150 font-medium"
                        >
                            ← Start Over (Go to Step 1)
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
});


const BulkSMS = () => {
    const [step, setStep] = useState(1);
    const [manualInput, setManualInput] = useState('');
    const [checkedInput, setCheckedInput] = useState('');

    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);

    const handleNext = useCallback((nextStep) => {
        setStep(nextStep);
        if (nextStep < 4) {
            setSendSuccess(false);
            setIsSending(false);
        }
        if (nextStep === 3 || nextStep === 1) {
            setCheckedInput('');
            if (nextStep === 1) {
                setManualInput('');
                setMessage('');
            }
        }
    }, []);

    const handleInputReady = useCallback((value) => {
        setManualInput(value);
    }, []);

    const handleCheckNumbers = useCallback(() => {
        setCheckedInput(manualInput);
        setSendSuccess(false);
    }, [manualInput]);

    const processedResults = useMemo(() => {
        if (!checkedInput) return [];
        return validateNumbers(checkedInput);
    }, [checkedInput]);

    const validNumbersList = processedResults.filter(r => r.status === 'Valid');

    const validCount = validNumbersList.length;
    const invalidCount = processedResults.length - validCount;

    const handleRemoveInvalid = useCallback(() => {
        const validNumberStrings = validNumbersList.map(r => r.original);
        const newManualInput = validNumberStrings.join(', ');
        setManualInput(newManualInput);
        setCheckedInput(newManualInput);
    }, [validNumbersList]);

    const handleMessageChange = useCallback((e) => {
        setMessage(e.target.value);
        setSendSuccess(false);
    }, []);

    const handleSendMessage = useCallback(() => {
        if (message.trim().length === 0 || validCount === 0) return;

        setIsSending(true);
        setSendSuccess(false);

        setTimeout(() => {
            setIsSending(false);
            setSendSuccess(true);
        }, 1500);
    }, [message, validCount]);

    const getCurrentStepComponent = () => {
        switch (step) {
            case 1:
                return <Step1SelectMethod handleNext={handleNext} />;
            case 2:
                return <Step2ExcelUpload handleNext={handleNext} />;
            case 3:
                return (
                    <Step3ManualEntry
                        manualInput={manualInput}
                        checkedInput={checkedInput}
                        processedResults={processedResults}
                        invalidCount={invalidCount}
                        validCount={validCount}
                        handleInputReady={handleInputReady}
                        handleCheckNumbers={handleCheckNumbers}
                        handleRemoveInvalid={handleRemoveInvalid}
                        handleNext={handleNext}
                    />
                );
            case 4:
                return (
                    <Step4MessageComposer
                        validCount={validCount}
                        message={message}
                        onMessageChange={handleMessageChange}
                        onSend={handleSendMessage}
                        isSending={isSending}
                        sendSuccess={sendSuccess}
                        handleNext={handleNext}
                        costPerSegmentUSD={DYNAMIC_CONFIG.COST_PER_SEGMENT_USD}
                        costPerSegmentBDT={DYNAMIC_CONFIG.COST_PER_SEGMENT_BDT}
                        smsMaxChars={DYNAMIC_CONFIG.SMS_MAX_CHARS}
                    />
                );
            default:
                return <Step1SelectMethod handleNext={handleNext} />;
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen font-sans">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">Bulk SMS Sender</h1>

            <div className="flex items-center justify-center mb-8">
                <div className={`p-3 rounded-full text-white font-bold text-sm ${step === 1 ? 'bg-indigo-600' : 'bg-gray-400'}`}>1</div>
                <div className={`w-24 h-1 ${step >= 2 ? 'bg-indigo-400' : 'bg-gray-300'}`}></div>
                <div className={`p-3 rounded-full text-white font-bold text-sm ${step === 2 || step === 3 ? 'bg-indigo-600' : 'bg-gray-400'}`}>2</div>
                <div className={`w-24 h-1 ${step >= 4 ? 'bg-indigo-400' : 'bg-gray-300'}`}></div>
                <div className={`p-3 rounded-full text-white font-bold text-sm ${step === 4 ? 'bg-indigo-600' : 'bg-gray-400'}`}>3</div>
            </div>

            <div className="w-full">
                {getCurrentStepComponent()}
            </div>
        </div>
    );
};

export default BulkSMS;