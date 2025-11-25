import React from 'react';
// Ensure all Lucide icons used in the data are imported here.
import {
    BookOpen, Zap, Code, ShieldCheck, Briefcase, Landmark, Globe,
    GraduationCap, Server, TrendingUp, Cpu, LayoutGrid, Smartphone, MapPin
} from 'lucide-react';

const instructorData = {
    education: [
        { degree: 'M.Sc in Computer Science & Engineering', institution: 'Manik University, Bangladesh', icon: GraduationCap },
        { degree: 'B.Sc in Mathematics', institution: 'National University, Bangladesh', icon: BookOpen },
        { degree: 'M.Sc in Information Technology', institution: 'University of the People', icon: Server },
        { degree: 'B.Sc in Computer Science & Engineering', institution: 'Bangladeshi Institute of Engineering', icon: Code },
    ],
    certifications: [
        { title: 'Blockchain Engineer', issuer: 'Blockchain Council', icon: ShieldCheck },
        { title: 'Quantum Expert', issuer: 'Blockchain Council', icon: Cpu },
        { title: 'MERN Stack Developer', issuer: 'Oreid', icon: Code },
        { title: 'Flutter Developer', issuer: 'Oreid', icon: Smartphone },
        { title: 'Web Application Developer', issuer: 'Gazi University & ICT Project', icon: LayoutGrid },
        { title: 'Associate Android Developer', issuer: 'Google', icon: Smartphone },
        { title: 'Master Trainer', issuer: 'MISD, SIRD, PDSB, CBA & TPD', icon: Zap },
    ],
    workExperience: [
        { company: 'Aramstone Technology', role: 'Technology Solutions' },
        { company: 'Blacklait Technology', role: 'Budapest, Hungary' },
        { company: 'Nationalfide TPI, LLC', role: 'Jarbles, New York' },
        { company: 'Faction Street', role: 'Bangladeshi Front' },
        { company: 'Citi Global Resources', role: 'South Africa' },
        { company: 'CyberCodes', role: 'India' },
        { company: 'Bela Source', role: 'USA' },
        { company: 'Bird Solution', role: 'India' },
        { company: 'SoftSpark IT', role: 'Bangladesh' },
        { company: 'Computer World Bangladesh', role: 'Bangladesh' },
        { company: 'Digital IT Institute', role: 'Bangladesh' },
    ],
    projects: [
        { name: 'EDGE Project', description: 'Enhancing Digital Government And Economy', icon: TrendingUp },
        { name: 'ASSET Project', description: 'Acceleration and Strengthening Skills for Economic Transformation', icon: Briefcase },
        { name: 'Sheikh Russell Digital Lab', description: 'SRDL – Digital Education Initiative', icon: Code },
        { name: 'Sheikh Russell School Of Future', description: 'Future-ready education program', icon: GraduationCap },
        { name: 'Cross-Platform App Development Training', description: 'ICT Ministry, Bangladesh', icon: Smartphone },
        { name: 'Learning & Earning Development Project', description: 'ICT Ministry, Bangladesh', icon: BookOpen },
        { name: 'She Power Project', description: 'Women empowerment through technology – ICT Ministry', icon: Zap },
        { name: 'Her Power Project', description: 'Female leadership in tech – ICT Ministry', icon: Zap },
        { name: 'Mobile Games & Application Development', description: 'Skill development program – ICT Ministry', icon: Smartphone },
        { name: 'Aspire to Innovate (a2i) Project', description: 'Innovation and digital transformation – ICT Ministry', icon: Cpu },
        { name: 'National ICT Infrastructure Network Phase Two', description: 'Bangladesh Government – ICT Ministry', icon: Server },
        { name: 'Partnership for a More Tolerant and Inclusive Bangladesh', description: 'PTIB – ICT Ministry', icon: Landmark },
    ],
};

const SectionHeader = ({ title, icon: Icon }) => (
    <div className="flex items-center space-x-3 mb-10">
        <Icon className="w-8 h-8 text-blue-400" />
        <h2 className="text-2xl font-bold text-white tracking-tight">
            {title}
        </h2>
    </div>
);

const GlassCard = ({ children }) => (
    // Base Glassmorphism/Neumorphism-style card for Education/Certifications
    <div className="bg-[#1a202c]/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-[#2d3748]/50 hover:border-blue-500 transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
        {children}
    </div>
);

const EducationCard = ({ degree, institution, icon: Icon }) => (
    <GlassCard>
        <div className="flex items-start space-x-4">
            {/* Renders the icon component passed via the 'icon' prop */}
            <Icon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-bold text-white tracking-wide">{degree}</h3>
                <p className="text-sm text-gray-400 mt-1">{institution}</p>
            </div>
        </div>
    </GlassCard>
);

const CertificationCard = ({ title, issuer, icon: Icon }) => (
    <GlassCard>
        <div className="flex flex-col h-full justify-between">
            <div className="text-sm font-medium text-blue-400 flex items-center mb-2">
                <Icon className="w-4 h-4 mr-2" />
                {issuer}
            </div>
            <h4 className="text-lg font-semibold text-white leading-snug">{title}</h4>
        </div>
    </GlassCard>
);

const ProjectCard = ({ name, description, icon: Icon }) => (
    <GlassCard>
        <div className="flex items-start space-x-4">
            <Icon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-bold text-white tracking-wide">{name}</h3>
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
        </div>
    </GlassCard>
);

// 🌟 UPDATED Work Experience Card Component for a Timeline/Gradient effect 🌟
const WorkExperienceCard = ({ company, role }) => (
    <div className="relative p-6 rounded-xl overflow-hidden bg-[#1a202c]/50 backdrop-blur-sm shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.03]">
        {/* Dynamic Gradient Border Effect using a pseudo-element */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition duration-500 ease-in-out 
                      before:content-[''] before:absolute before:inset-[-100%] before:bg-gradient-to-r before:from-blue-600 before:to-green-400 before:opacity-0 hover:before:opacity-75 before:transition-all before:duration-700">
        </div>

        <div className="relative z-10 flex flex-col h-full">
            {/* Location Tag */}
            <div className="flex items-center text-sm text-blue-300 mb-2">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="italic ">{role}</span>
            </div>

            {/* Company Name */}
            <h4 className="text-2xl font-semibold text-white leading-snug tracking-wide">
                {company}
            </h4>
        </div>
    </div>
);

const InstructorPage = () => {
    return (
        // Applied custom dark background color: bg-[#00091a]
        <div className="min-h-screen bg-[#00091a] text-white p-4 sm:p-10 font-sans relative overflow-hidden">

            {/* Background Gradients for Modern Depth (Animated effects require Tailwind config) */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/50 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <header className="py-16 text-center mb-16 border-b border-[#1a202c]">
                    <h1 className="text-4xl max-sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-pulse-slow">
                        The AI Instructor Profile
                    </h1>
                    <p className="text-xl text-gray-400 mt-3 tracking-wider">
                        Academic Excellence and Global Impact in Emerging Technologies
                    </p>
                </header>

                <section className="mb-20">
                    <SectionHeader title="Education" icon={GraduationCap} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {instructorData.education.map((edu, index) => (
                            <EducationCard key={index} {...edu} />
                        ))}
                    </div>
                </section>

                <div className="my-20 h-px bg-gradient-to-r from-[#00091a] via-blue-700/50 to-[#00091a]"></div>

                <section className="mb-20">
                    <SectionHeader title="Professional Certifications" icon={ShieldCheck} />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {instructorData.certifications.map((cert, index) => (
                            <CertificationCard key={index} {...cert} />
                        ))}
                    </div>
                </section>

                <div className="my-20 h-px bg-gradient-to-r from-[#00091a] via-green-700/50 to-[#00091a]"></div>

                {/* 🌟 Work Experience Section with the NEW Card Design 🌟 */}
                <section className="mb-20">
                    <SectionHeader title="Work Experience" icon={Briefcase} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {instructorData.workExperience.map((work, index) => (
                            <WorkExperienceCard key={index} company={work.company} role={work.role} />
                        ))}
                    </div>
                </section>

                <div className="my-20 h-px bg-gradient-to-r from-[#00091a] via-purple-700/50 to-[#00091a]"></div>

                <section className="mb-20">
                    <SectionHeader title="Government & Organizations Projects" icon={Globe} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {instructorData.projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InstructorPage;