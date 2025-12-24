import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const profiles = [
    {
        id: 1,
        name: 'Riovaldo',
        role: 'Fullstack Developer',
        rotation: 'rotate-2',
        imageColor: '/team/riovaldo.png',
        imageBw: '/team/riovaldo.png'
    },
    {
        id: 2,
        name: 'Rizal',
        role: 'Frontend Developer',
        rotation: '-rotate-1',
        imageColor: '/team/riovaldo.png',
        imageBw: '/team/riovaldo.png'
    },
    {
        id: 3,
        name: 'Vidi',
        role: 'Backend Developer',
        rotation: 'rotate-3',
        imageColor: '/team/riovaldo.png',
        imageBw: '/team/riovaldo.png'
    },
    {
        id: 4,
        name: 'Rafi',
        role: 'HTML Guy',
        rotation: '-rotate-2',
        imageColor: '/team/riovaldo.png',
        imageBw: '/team/riovaldo.png'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const Team = () => {
    const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
    const [isPlusHovered, setIsPlusHovered] = useState(false);

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <h2 className="text-5xl md:text-7xl font-serif-display font-medium mb-8 text-neutral-900">Our <span className='italic font-serif-display text-blue-500/80'>/Team</span></h2>
                <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed">
                    Our team is a tight-knit family of designers, artists, and visionaries, all bound by the same creative enthusiasm.
                </p>
            </div>

            <motion.div
                className="flex flex-wrap items-center lg:justify-center gap-12 md:gap-22 max-w-7xl mx-auto bg-white mb-8 sm:mb-10 px-4 min-h-[200px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {profiles.map((profile) => {
                    const isHovered = hoveredProfile === profile.id || isPlusHovered
                    return (
                        <motion.div
                            key={profile.id}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredProfile(profile.id)}
                            onMouseLeave={() => setHoveredProfile(null)}
                        >
                            <div
                                className={`
                                    w-24 h-24 sm:w-20 sm:h-20 md:w-28 md:h-28 overflow-hidden transition-all duration-300 ease-in-out transform rounded-full bg-white
                                    ${profile.rotation}
                                    ${isHovered ? "scale-125 rotate-6 z-20" : "grayscale"}
                                `}
                            >
                                <img
                                    src={isHovered ? profile.imageColor : profile.imageBw}
                                    alt={profile.name}
                                    className={`
                                        w-full h-full object-cover transition-all duration-300
                                        ${isHovered ? "grayscale-0" : "grayscale"}
                                    `}
                                />
                            </div>

                            {/* Tooltip */}
                            {hoveredProfile === profile.id && (
                                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-xl text-left whitespace-nowrap z-30 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="font-semibold text-base">{profile.name}</div>
                                    <div className="text-sm text-gray-300 font-medium">{profile.role}</div>
                                    <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rotate-45"></div>
                                </div>
                            )}
                        </motion.div>
                    )
                })}
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
                <div className="flex flex-col md:flex-row items-baseline gap-4">
                    <span className="text-2xl md:text-3xl font-medium text-neutral-900">Are you our next team member?</span>
                    <a
                        href="#"
                        className="flex items-center gap-2 border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors uppercase tracking-widest font-bold text-lg md:text-xl h-fit"
                        onMouseEnter={() => setIsPlusHovered(true)}
                        onMouseLeave={() => setIsPlusHovered(false)}
                    >
                        See Openings
                    </a>
                </div>
            </div>
        </section>
    );
};
