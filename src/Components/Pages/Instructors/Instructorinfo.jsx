import React, { useState, useEffect } from 'react';

// --- Skill Data: Updated to fit the 3 (1st) and 6 (2nd) ratio ---
const instructorImage = "https://i.ibb.co.com/GvzWCGVC/559582900-3257663794401608-589286707835909941-n.jpg";

const roles = [
  "Senior Blockchain Developer",
  "AI Engineer",
  "Quantam Expert",
  "Full Stack Software Engineer"
];

// Define base sizes. We will dynamically calculate smaller sizes for responsiveness.
const ORBITAL_SIZES = {
  small: { name: 'w-60 h-60', basePx: 240, duration: '8s' }, // 60 * 4 = 240px
  medium: { name: 'w-[32rem] h-[32rem]', basePx: 512, duration: '14s' }, // 32 * 16 = 512px
};

const skills = [
  // --- Orbital 1 (Smallest Radius - 3 Skills) ---
  { name: 'React', color: 'text-cyan-400', radius: ORBITAL_SIZES.small.name, duration: ORBITAL_SIZES.small.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', color: 'text-white', radius: ORBITAL_SIZES.small.name, duration: ORBITAL_SIZES.small.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind', color: 'text-teal-400', radius: ORBITAL_SIZES.small.name, duration: ORBITAL_SIZES.small.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },

  // --- Orbital 2 (Medium Radius - 6 Skills, 3x2) ---
  { name: 'Node.js', color: 'text-green-500', radius: ORBITAL_SIZES.medium.name, duration: ORBITAL_SIZES.medium.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', color: 'text-gray-500', radius: ORBITAL_SIZES.medium.name, duration: ORBITAL_SIZES.medium.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'MongoDB', color: 'text-lime-500', radius: ORBITAL_SIZES.medium.name, duration: ORBITAL_SIZES.medium.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', color: 'text-blue-600', radius: ORBITAL_SIZES.medium.name, duration: ORBITAL_SIZES.medium.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'AWS', color: 'text-orange-400', radius: ORBITAL_SIZES.medium.name, duration: ORBITAL_SIZES.medium.duration, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'AI/ML', color: 'text-purple-500', radius: ORBITAL_SIZES.medium.name, duration: ORBITAL_SIZES.medium.duration, logo: 'https://i.ibb.co/r7b6t12/ai-logo.png' },
]; 

// --- Global CSS Styles (Rotation Keyframes remain the same) ---
const globalStyles = `
  /* Counter-Clockwise (বাম দিকে - Bam Dike) */
  @keyframes orbital-spin-counter-clockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  /* Clockwise (ডান দিকে - Dan Dike) */
  @keyframes orbital-spin-clockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Custom Shadows */
  .shadow-custom-sun { box-shadow: 0 0 100px rgba(255, 165, 0, 0.8), 0 0 15px rgba(255, 165, 0, 0.4); }
  .shadow-custom-orb { box-shadow: 0 0 8px currentColor; }
`;

// Helper Hook for Window Size
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    updateSize(); // Initial call
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

// Function to calculate responsive orbital size (in pixels)
const getResponsiveOrbitalHalfSize = (orbitalType, windowWidth) => {
  const isSmallScreen = windowWidth < 1024; // Tailwind 'lg' breakpoint
  const basePx = ORBITAL_SIZES[orbitalType].basePx;
  let finalPx;

  if (isSmallScreen) {
    // For small screens, scale down the orbit proportionally to the viewport width (vw)
    // Example scaling: small orbit is about 60% of viewport width, medium is 85%.
    const vw = windowWidth;
    if (orbitalType === 'small') {
      // 1st orbit: around 50% of screen width
      finalPx = vw * 0.50; 
    } else { // 'medium'
      // 2nd orbit: around 75% of screen width
      finalPx = vw * 0.75; 
    }
  } else {
    // Large screen: use the fixed base pixel value
    finalPx = basePx;
  }
  
  // Return the radius (half size)
  return finalPx / 2;
};

// Function to convert base class to responsive class (only for the outer rings)
const getResponsiveRadiusClass = (orbitalType, windowWidth) => {
    const isSmallScreen = windowWidth < 1024;
    
    if (isSmallScreen) {
        // Use custom Tailwind classes for small screens (e.g., w-[50vw] for the diameter)
        if (orbitalType === 'small') return 'w-[50vw] h-[50vw]'; 
        if (orbitalType === 'medium') return 'w-[75vw] h-[75vw]'; 
    }
    // Large screen: use the fixed original class
    return ORBITAL_SIZES[orbitalType].name;
}

function InstructorInfo() {
  const [windowWidth] = useWindowSize();
  // ... (Typing animation logic remains the same) ...
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Typing animation logic
    const currentRole = roles[roleIndex % roles.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);
  // --- End Typing Animation ---


  // Function to group skills by their orbital radius/set
  const groupSkillsByOrbital = () => {
    const orbitalTypes = {
      [ORBITAL_SIZES.small.name]: 'small',
      [ORBITAL_SIZES.medium.name]: 'medium',
    };
    
    const orbitals = [];
    let currentOrbital = [];
    let currentRadius = '';

    skills.forEach((skill) => {
      if (currentRadius === '' || skill.radius === currentRadius) {
        currentOrbital.push(skill);
      } else {
        orbitals.push({ 
            skills: currentOrbital, 
            type: orbitalTypes[currentRadius]
        });
        currentOrbital = [skill];
      }
      currentRadius = skill.radius;
    });
    if (currentOrbital.length > 0) {
      orbitals.push({ 
          skills: currentOrbital, 
          type: orbitalTypes[currentRadius] 
      });
    }
    return orbitals;
  };

  const orbitalGroups = groupSkillsByOrbital();
  
  const skillIconSize = 56; 

  return (
    <>
      <style>{globalStyles}</style>

      <div className="min-h-screen bg-transparent flex items-center justify-center p-4 overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full max-w-[1300px] mx-auto">
          
          {/* Left Side: Instructor Info */}
          <div className="flex-1 min-h-[40vh] flex items-center justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start p-1 md:p-5 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-400 mb-2 sm:mb-4 tracking-tight">
                Maruf Hossain
              </h1>
              <div className="h-8 sm:h-10 text-xl sm:text-2xl lg:text-3xl font-light text-white mb-4 sm:mb-6">
                {currentText}
                <span className="ml-1 inline-block w-1 bg-white animate-pulse">|</span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed">
                Expert in building robust, scalable web applications and exploring cutting-edge technologies like Blockchain and AI.
              </p>
            </div>
          </div>

          <div className="flex-1 min-h-[50vh] flex items-center justify-center relative py-10 lg:min-h-screen">
            <div className="flex justify-center items-center w-full h-full relative" style={{ minHeight: windowWidth < 1024 ? `${windowWidth * 0.8}px` : 'auto' }}>
              
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-yellow-600 shadow-custom-sun absolute z-10 flex items-center justify-center p-1 overflow-hidden">
                <img
                  src={instructorImage}
                  alt="Instructor"
                  className="w-full h-full object-cover rounded-full border-2 border-yellow-400"
                />
              </div>

              {orbitalGroups.map((orbitalGroup, orbitalIndex) => {
                const { skills: orbitalSkills, type } = orbitalGroup;
                
                const isCounterClockwiseOrbital = orbitalIndex % 2 === 0;
                const orbitalAnimationName = isCounterClockwiseOrbital
                  ? 'orbital-spin-counter-clockwise'
                  : 'orbital-spin-clockwise';

                const orbitalHalfSize = getResponsiveOrbitalHalfSize(type, windowWidth);
                const responsiveRadiusClass = getResponsiveRadiusClass(type, windowWidth); 

                return (
                  <div
                    key={`orbital-${orbitalIndex}`}
                    className={`absolute rounded-full border border-opacity-30 border-gray-600 flex justify-center items-center ${responsiveRadiusClass}`}
                    style={{
                      
                      animation: `${orbitalAnimationName} ${orbitalSkills[0].duration} linear infinite`,
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center',
                    }}
                  >
                    {orbitalSkills.map((skill, skillInnerIndex) => {
                      const numberOfSkillsInOrbital = orbitalSkills.length;
                      
                      const angle = (360 / numberOfSkillsInOrbital) * skillInnerIndex;
                      const angleRad = angle * (Math.PI / 180);

                      const leftPos = orbitalHalfSize * Math.cos(angleRad) - (skillIconSize / 2);
                      const topPos = orbitalHalfSize * Math.sin(angleRad) - (skillIconSize / 2);

                      const skillCounterAnimation = isCounterClockwiseOrbital
                        ? 'orbital-spin-clockwise'
                        : 'orbital-spin-counter-clockwise';

                      return (
                        <div
                          key={skill.name}
                          className={`w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center absolute border-2 border-opacity-90 ${skill.color.replace('text-', 'border-')}`}
                          style={{
                            top: `calc(50% + ${topPos}px)`,
                            left: `calc(50% + ${leftPos}px)`,
                            animation: `${skillCounterAnimation} ${skill.duration} linear infinite`,
                          }}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className={`w-9 h-9 object-contain`}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorInfo;