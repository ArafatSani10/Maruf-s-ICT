import React, { useState, useEffect } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Youtube,
    CheckCircle,
    UploadCloud,
    Save,
    Edit,
    Trash2,
    PlusCircle,
    XCircle,
    Settings,
    Palette,
    Users,
    Star,
    Link2,
    Image
} from 'lucide-react';

const initialSettings = {
    coachingCenterName: "M@R-UF'S ICT CARE",
    description: " ICT ক্লিয়ার EDU মাস্টার ট্রেইনার স্যারের পরিচালনায় এবং ২১ টি ক্লাসের HSC ICT Zero To Hero অ্যাডভান্সড কোর্স ফাইনাল পরীক্ষা পর্যন্ত ফ্রি নির্দেশন প্রদান করে থাকে",
    showBooksSection: true,
    showBranchesSection: false,
    autoSMSOnEnrollment: true,
    totalStudents: 650,
    activeBatches: 12,
    totalBranches: 1,
    primaryColor: '#6366f1',
    secondaryColor: '#f59e0b',

    phoneNumber: '0172369524',
    emailAddress: 'marufjarvia@gmail.com',
    address: 'Moriom Clinic Lane, Hospital Mor, Talipara, Kushtia',

    whyChooseUsFeatures: [
        { id: 1, text: 'Advanced Course Final Exam Instruction FREE', isEditing: false },
        { id: 2, text: 'Certified Master Trainer Led Classes', isEditing: false },
        { id: 3, text: 'HSC ICT Zero to Hero Program', isEditing: false },
    ],
    socialLinks: [
        { id: 1, platform: 'Facebook', url: 'https://www.facebook.com/marufictcare', icon: Facebook },
        { id: 2, platform: 'YouTube', url: 'https://www.youtube.com/@programmer_maruf', icon: Youtube }
    ],
};

const AnimatedCard = ({ children, className = '', delay = 0 }) => (
    <div
        className={`bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 ${className}`}
        style={{
            animationDelay: `${delay}ms`,
            animation: 'slideInUp 0.6s ease-out forwards',
            opacity: 0
        }}
    >
        {children}
    </div>
);

const InputField = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder,
    rows = 1,
    icon: Icon,
    className = ''
}) => (
    <div className={`space-y-2 ${className}`}>
        {label && (
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {label}
            </label>
        )}
        {type === 'textarea' ? (
            <textarea
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white"
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 hover:bg-white"
            />
        )}
    </div>
);

const ToggleSwitch = ({ label, isChecked, onChange, description }) => (
    <div className="flex items-center justify-between py-3 group cursor-pointer">
        <div className="flex-1">
            <span className="text-base font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {label}
            </span>
            {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
            )}
        </div>
        <button
            onClick={onChange}
            className={`${isChecked ? 'bg-blue-500' : 'bg-gray-300'
                } relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 group-hover:scale-105`}
        >
            <span
                className={`${isChecked ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300`}
            />
        </button>
    </div>
);

const SettingsCard = ({ title, icon: Icon, children, className = '' }) => (
    <AnimatedCard className={`p-6 space-y-6 ${className}`}>
        <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
            {Icon && <Icon className="w-6 h-6 text-blue-500" />}
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        {children}
    </AnimatedCard>
);

const FeatureItem = ({ feature, onEdit, onSave, onDelete, isEditing, onChange }) => (
    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 group hover:shadow-md transition-all duration-300">
        <div className="flex-1">
            {isEditing ? (
                <input
                    type="text"
                    value={feature.text}
                    onChange={(e) => onChange(feature.id, e.target.value)}
                    className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                />
            ) : (
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
            )}
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isEditing ? (
                <button
                    onClick={() => onSave(feature.id)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                >
                    <CheckCircle className="w-4 h-4" />
                </button>
            ) : (
                <button
                    onClick={() => onEdit(feature.id)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                    <Edit className="w-4 h-4" />
                </button>
            )}
            <button
                onClick={() => onDelete(feature.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    </div>
);

const ColorPicker = ({ label, color, onChange, icon: Icon }) => (
    <div className="space-y-3">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4" />}
            {label}
        </label>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <input
                type="color"
                value={color}
                onChange={onChange}
                className="w-16 h-16 rounded-xl border-2 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform"
            />
            <div className="flex-1">
                <div
                    className="w-full h-8 rounded-md mb-2 border"
                    style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm font-mono text-gray-600">{color.toUpperCase()}</span>
            </div>
        </div>
    </div>
);

const SettingsPage = () => {
    const [settings, setSettings] = useState(initialSettings);
    const [newFeatureText, setNewFeatureText] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (key, value) => {
        setSettings(prev => ({
            ...prev,
            [key]: value,
        }));
        setIsSaved(false);
    };

    const handleFeatureEdit = (id) => {
        setSettings(prev => ({
            ...prev,
            whyChooseUsFeatures: prev.whyChooseUsFeatures.map(f =>
                f.id === id ? { ...f, isEditing: true } : { ...f, isEditing: false }
            ),
        }));
    };

    const handleFeatureSave = (id, newText) => {
        setSettings(prev => ({
            ...prev,
            whyChooseUsFeatures: prev.whyChooseUsFeatures.map(f =>
                f.id === id ? { ...f, text: newText, isEditing: false } : f
            ),
        }));
        setIsSaved(false);
    };

    const handleFeatureChange = (id, newText) => {
        setSettings(prev => ({
            ...prev,
            whyChooseUsFeatures: prev.whyChooseUsFeatures.map(f =>
                f.id === id ? { ...f, text: newText } : f
            ),
        }));
    };

    const handleFeatureDelete = (id) => {
        setSettings(prev => ({
            ...prev,
            whyChooseUsFeatures: prev.whyChooseUsFeatures.filter(f => f.id !== id),
        }));
        setIsSaved(false);
    };

    const handleFeatureAdd = () => {
        if (newFeatureText.trim() === '') return;
        const newId = Date.now();
        setSettings(prev => ({
            ...prev,
            whyChooseUsFeatures: [
                ...prev.whyChooseUsFeatures,
                { id: newId, text: newFeatureText.trim(), isEditing: false }
            ],
        }));
        setNewFeatureText('');
        setIsSaved(false);
    };

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Settings Saved:', settings);
        setIsSaved(true);
        setIsSaving(false);
        setTimeout(() => setIsSaved(false), 3000);
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 md:p-6 pb-24">
            <div className="max-w-full mx-auto">
                <header className="mb-8 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="p-3 bg-blue-500 rounded-2xl shadow-lg">
                            <Settings className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Landing Page setting
                            </h1>
                            <p className="text-gray-600 mt-2">Manage your coaching center's information and preferences</p>
                        </div>
                    </div>
                </header>

                {isSaved && (
                    <div className="mb-6 flex items-center p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl shadow-lg animate-pulse">
                        <CheckCircle className="w-5 h-5 mr-3" />
                        <p className="font-semibold">All changes saved successfully!</p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <SettingsCard title="Logo & Brand" icon={Image} delay={100}>
                            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-2xl bg-white/50 hover:bg-white transition-colors">
                                <div className="w-32 h-32 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner">
                                    <UploadCloud className="w-12 h-12 text-blue-400" />
                                </div>
                                <p className="text-sm text-gray-600 mb-4 font-medium text-center">
                                    Upload your  logo
                                </p>
                                <button className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <UploadCloud className="w-4 h-4 mr-2" />
                                    Choose Image
                                </button>
                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    PNG, JPG, WEBP • Max 5MB
                                </p>
                            </div>
                        </SettingsCard>

                        <SettingsCard title="Contact Details" icon={Phone} delay={200}>
                            <InputField
                                label="Phone Number"
                                type="tel"
                                value={settings.phoneNumber}
                                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                                icon={Phone}
                            />
                            <InputField
                                label="Email Address"
                                type="email"
                                value={settings.emailAddress}
                                onChange={(e) => handleChange('emailAddress', e.target.value)}
                                icon={Mail}
                            />
                            <InputField
                                label="Institute Address"
                                value={settings.address}
                                onChange={(e) => handleChange('address', e.target.value)}
                                icon={MapPin}
                            />
                        </SettingsCard>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-6">

                        <SettingsCard title="Basic Information" icon={Settings} delay={150}>
                            <InputField
                                label="Institute Name"
                                value={settings.coachingCenterName}
                                onChange={(e) => handleChange('coachingCenterName', e.target.value)}
                            />
                            <InputField
                                label="Description"
                                type="textarea"
                                rows={4}
                                value={settings.description}
                                onChange={(e) => handleChange('description', e.target.value)}
                            />

                            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                                <ToggleSwitch
                                    label="Show Books Section"
                                    isChecked={settings.showBooksSection}
                                    onChange={() => handleChange('showBooksSection', !settings.showBooksSection)}
                                    description="Display books section on the main website"
                                />
                                <ToggleSwitch
                                    label="Auto SMS on Enrollment"
                                    isChecked={settings.autoSMSOnEnrollment}
                                    onChange={() => handleChange('autoSMSOnEnrollment', !settings.autoSMSOnEnrollment)}
                                    description="Send automatic SMS when students enroll"
                                />
                            </div>
                        </SettingsCard>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SettingsCard title="Theme Colors" icon={Palette} delay={250}>
                                <ColorPicker
                                    label="Primary Color"
                                    color={settings.primaryColor}
                                    onChange={(e) => handleChange('primaryColor', e.target.value)}
                                />
                                <ColorPicker
                                    label="Secondary Color"
                                    color={settings.secondaryColor}
                                    onChange={(e) => handleChange('secondaryColor', e.target.value)}
                                />
                            </SettingsCard>

                            <SettingsCard title="Statistics" icon={Users} delay={300}>
                                <div className="space-y-4">
                                    <InputField
                                        label="Total Students"
                                        type="number"
                                        value={settings.totalStudents}
                                        onChange={(e) => handleChange('totalStudents', e.target.value)}
                                    />
                                    <InputField
                                        label="Active Batches"
                                        type="number"
                                        value={settings.activeBatches}
                                        onChange={(e) => handleChange('activeBatches', e.target.value)}
                                    />
                                    <InputField
                                        label="Total Branches"
                                        type="number"
                                        value={settings.totalBranches}
                                        onChange={(e) => handleChange('totalBranches', e.target.value)}
                                    />
                                </div>
                            </SettingsCard>
                        </div>

                        <SettingsCard title="Why Choose Us" icon={Star} delay={350}>
                            <div className="space-y-3">
                                {settings.whyChooseUsFeatures.map((feature, index) => (
                                    <FeatureItem
                                        key={feature.id}
                                        feature={feature}
                                        onEdit={handleFeatureEdit}
                                        onSave={handleFeatureSave}
                                        onDelete={handleFeatureDelete}
                                        onChange={handleFeatureChange}
                                        isEditing={feature.isEditing}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-gray-100">
                                <InputField
                                    label=""
                                    placeholder="Add a new feature..."
                                    value={newFeatureText}
                                    onChange={(e) => setNewFeatureText(e.target.value)}
                                    className="flex-1"
                                />
                                <button
                                    onClick={handleFeatureAdd}
                                    className="flex items-center px-6 py-4 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    disabled={newFeatureText.trim() === ''}
                                >
                                    <PlusCircle className="w-5 h-5 mr-2" />
                                    Add
                                </button>
                            </div>
                        </SettingsCard>

                        <SettingsCard title="Social Links" icon={Link2} delay={400}>
                            <div className="space-y-4">
                                {settings.socialLinks.map((link) => (
                                    <div key={link.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                        <link.icon className={`w-6 h-6 ${link.platform === 'Facebook' ? 'text-blue-500' : 'text-red-500'
                                            }`} />
                                        <InputField
                                            label=""
                                            value={link.url}
                                            onChange={(e) => {
                                                const updatedLinks = settings.socialLinks.map(l =>
                                                    l.id === link.id ? { ...l, url: e.target.value } : l
                                                );
                                                handleChange('socialLinks', updatedLinks);
                                            }}
                                            placeholder={`${link.platform} URL`}
                                            className="flex-1"
                                        />
                                    </div>
                                ))}
                            </div>
                        </SettingsCard>
                    </div>
                </div>
            </div>

            {/* Sticky Save Button */}
            <div className="w-full px-4">
                <div className=" border border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${isSaved ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                            <span className="text-sm font-semibold text-gray-700">
                                {isSaved ? 'All changes saved' : 'You have unsaved changes'}
                            </span>
                        </div>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSaving ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    <span>Save All Changes</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;