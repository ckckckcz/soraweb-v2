import { Layers, Rocket, Users, Zap } from 'lucide-react';

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

                {/* Bottom: Logos / Trust Indicators */}
                <div className="w-full">
                    <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by industry leaders</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
                            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white"><Zap size={16} /></div>
                            <span>BoltShift</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
                            <div className="w-8 h-8 border-2 border-slate-800 rounded flex items-center justify-center"><Layers size={16} /></div>
                            <span>Layers</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
                            <div className="w-8 h-8 bg-slate-800 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white"><Rocket size={16} /></div>
                            <span>RocketUp</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
                            <div className="w-8 h-8 border-2 border-slate-800 rounded-full flex items-center justify-center"><Users size={16} /></div>
                            <span>Crowd</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
                            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-serif">S</div>
                            <span>Soraweb</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
