const techStack = [
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Astro", logo: "https://cdn.simpleicons.org/astro/BC52EE" },
    { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
    { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E" },
];

export const About = () => {
    return (
        <section id="about" className="relative py-24 px-4 md:px-8 bg-white text-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    {/* Left: Heading */}
                    <div className="lg:col-span-5 relative">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-medium leading-[1.1] tracking-tight text-slate-900">
                            A Collective of <br className="hidden lg:block" />
                            <span className="italic font-serif-display text-blue-500/80">/Passionate Minds</span> <br className="hidden lg:block" />
                            Driven by Purpose.
                        </h2>
                        {/* Decorative line */}
                        <div className="w-24 h-1 bg-blue-700 mt-8 rounded-full"></div>
                    </div>

                    {/* Right: Content & Stats */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="lg:mb-12">
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                Web development is more than just writing code — it's about crafting digital experiences that resonate. At Soraweb, we turn every concept into a functional masterpiece. From the very beginning, our mission has been to build personalized platforms that elevate brands and drive connection.
                            </p>

                            <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 mb-1">120+</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 mb-1">95+</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-slate-900 mb-1">5+</div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Tech Stack Carousel */}
                <div className="w-full mt-20">
                    <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">Tech yang kami gunakan</p>

                    <div className="relative w-full overflow-hidden">
                        {/* Gradient Masks for smooth fade out at edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                        <div className="flex gap-16 w-max animate-infinite-scroll hover:pause py-4 items-center">
                            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center gap-3 cursor-pointer"
                                >
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                    />
                                    {/* Optional: Show name on hover if desired, but sticking to logos for now as requested */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
