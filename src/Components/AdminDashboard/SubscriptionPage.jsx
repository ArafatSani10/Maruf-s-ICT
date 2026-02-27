import React from 'react';
import { CheckCircleIcon, ClockIcon, CreditCardIcon, EnvelopeIcon, PhoneIcon, ArrowTrendingUpIcon, ShieldCheckIcon, UserGroupIcon, CalendarDaysIcon, CurrencyBangladeshiIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const currentPlanDetails = {
    planName: "Premium Plan",
    price: "1999",
    cycle: "Monthly",
    startDate: "October 25, 2025",
    endDate: "November 25, 2025",
    nextRenewal: "November 25, 2025",
    smsCredits: "450.60",
};

const planFeatures = [
    { title: "Unlimited Students", icon: <UserGroupIcon className="h-5 w-5 text-green-500" /> },
    { title: "Full Dashboard Access", icon: <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" /> },
    { title: "All Professional Features", icon: <ShieldCheckIcon className="h-5 w-5 text-green-500" /> },
    { title: "Custom Landing Page", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "Multi-Branch Support", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "Book Sales Management", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "Custom Branding", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "Advanced Analytics", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "SMS Integration (Higher Limit)", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "24/7 Priority Support", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
    { title: "Custom Integrations", icon: <CheckCircleIcon className="h-5 w-5 text-green-500" /> },
];

const availablePlans = [
    {
        name: "Starter",
        price: "499",
        features: ["Up to 100 Students", "Basic Dashboard", "Student Management", "Batch Management", "Basic Reports", "Email Support"],
        current: false,
    },
    {
        name: "Professional",
        price: "999",
        features: ["Up to 500 Students", "Advanced Dashboard", "Student & Batch Management", "Online & Offline Exams", "Attendance Tracking", "Expense Management", "Branch Management", "Advanced Reports", "SMS Integration", "Priority Support"],
        mostPopular: true,
        current: false,
    },
    {
        name: "Premium",
        price: "1999",
        features: ["Unlimited Students", "Full Dashboard Access", "All Professional Features", "Custom Landing Page", "Multi-Branch Support", "Book Sales Management", "Custom Branding", "Advanced Analytics", "SMS Integration (Higher Limit)", "24/7 Priority Support", "Custom Integrations"],
        current: true,
    },
];

// ** Plan Detail Card Component **
const DetailCard = ({ icon, title, value, subValue, highlight }) => (
    <div className={`bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 border ${highlight ? 'border-green-500' : 'border-gray-200'}`}>
        <div className={`p-2 rounded-full ${highlight ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className={`text-lg font-bold ${highlight ? 'text-green-700' : 'text-gray-800'}`}>{value}</p>
            {subValue && <p className="text-xs text-gray-500">{subValue}</p>}
        </div>
    </div>
);

// ** Individual Plan Component **
const PlanCard = ({ plan }) => {
    const isCurrent = plan.current;
    const isPopular = plan.mostPopular;

    return (
        <div className={`flex flex-col rounded-xl shadow-2xl p-6 relative transition-all duration-300 ${isCurrent ? 'bg-white border-4 border-purple-600 ring-2 ring-purple-600' : 'bg-white border border-gray-200 hover:shadow-xl'}`}>
            
            {isPopular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    Most Popular
                </div>
            )}
            {isCurrent && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    Current Plan
                </div>
            )}

            <div className="text-center mb-6 pt-2">
                <h3 className="text-3xl font-extrabold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-5xl font-extrabold text-gray-900 flex items-center justify-center">
                    <CurrencyBangladeshiIcon className="h-8 w-8 text-gray-800" />{plan.price}
                    <span className="text-lg font-medium text-gray-500 ml-2">/month</span>
                </p>
            </div>
            
            <ul className="flex-1 space-y-3 text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircleIcon className={`h-5 w-5 flex-shrink-0 mr-3 ${isCurrent ? 'text-purple-600' : 'text-green-500'}`} />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                {isCurrent ? (
                    <button className="w-full py-3 border border-purple-600 rounded-xl text-lg font-semibold text-purple-600 bg-purple-50 cursor-default">
                        Current Plan
                    </button>
                ) : (
                    <button className={`w-full py-3 rounded-xl text-lg font-semibold text-white transition-colors duration-200 shadow-lg ${isPopular ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-600'}`}>
                        Upgrade Plan
                    </button>
                )}
            </div>
        </div>
    );
};


const SubscriptionPage = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            
            {/* Header and Current Plan Status */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600 mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 flex items-center">
                        <ArrowTrendingUpIcon className="h-8 w-8 text-purple-600 mr-3" />
                        {currentPlanDetails.planName}
                    </h2>
                    <div className="bg-yellow-100 text-yellow-700 font-bold py-2 px-4 rounded-xl shadow-inner text-sm">
                        3 Days Remaining
                    </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                    Active subscription for M@RUF'S ICT CARE
                </p>

                {/* Plan Detail Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <DetailCard 
                        icon={<CalendarDaysIcon className="h-6 w-6" />}
                        title="Subscription Period"
                        value={currentPlanDetails.startDate}
                        subValue={`End Date: ${currentPlanDetails.endDate}`}
                    />
                    <DetailCard 
                        icon={<CreditCardIcon className="h-6 w-6" />}
                        title="Billing"
                        value={<><CurrencyBangladeshiIcon className="h-5 w-5 inline-block -mt-1" />{currentPlanDetails.price}</>}
                        subValue={`Cycle: ${currentPlanDetails.cycle}`}
                    />
                    <DetailCard 
                        icon={<BellAlertIcon className="h-6 w-6" />}
                        title="SMS Credits"
                        value={`৳ ${currentPlanDetails.smsCredits}`}
                        subValue="Available Balance"
                        highlight={true}
                    />
                    <DetailCard 
                        icon={<ClockIcon className="h-6 w-6" />}
                        title="Next Renewal"
                        value={currentPlanDetails.nextRenewal}
                        subValue="Auto-renewal is active"
                    />
                </div>
            </div>

            {/* Plan Includes Section */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-5 border-b pb-2">Your Plan Includes</h3>
                <div className="bg-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-12">
                    {planFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-base font-medium text-gray-700">
                            {feature.icon}
                            <span>{feature.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Available Plans Section */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {availablePlans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} />
                    ))}
                </div>
            </div>

            {/* Help Section */}
            <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-600 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Need help with your subscription?</h3>
                <p className="text-gray-600 mb-4">
                    Contact our support team for assistance with billing, upgrades, or any questions about your subscription. Click to copy.
                </p>
                <div className="flex flex-wrap items-center space-x-4">
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 transition duration-150">
                        <EnvelopeIcon className="h-5 w-5 mr-2 text-red-500" />
                        edutechsoftwarebd@gmail.com
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 transition duration-150">
                        <PhoneIcon className="h-5 w-5 mr-2 text-blue-500" />
                        01660128079
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPage;