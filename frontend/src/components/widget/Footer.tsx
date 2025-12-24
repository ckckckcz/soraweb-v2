import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
    return (
        <footer className="relative min-h-screen bg-white text-black overflow-hidden py-10 px-4 md:px-8 flex flex-col justify-center">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-1 flex-col justify-center text-center">

                {/* Main Heading Section - Centered Vertically in the flex-1 space */}
                <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
                    <div className="mb-12 relative w-full max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-black">
                            <span className="block">let's work</span>
                            <span className="block italic font-serif-display text-blue-500/80">
                                /together
                            </span>
                        </h2>

                        {/* Floating Sticker Element */}
                        <div className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 rotate-12 bg-[#c3ff4d] text-slate-900 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-xl transform transition-transform hover:scale-110 hover:rotate-6 duration-300 z-20 hidden md:block">
                            <span className="font-bold text-lg md:text-2xl">stay. <br /> creative</span>
                        </div>
                    </div>

                    {/* Grid Layout for details */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full mt-10 md:mt-20 items-end">
                        {/* Left: Contact Info */}
                        <div className="md:col-span-3 text-left space-y-4 order-2 md:order-1">
                            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-4">Drop us a line</h3>
                            <a href="mailto:hello@soraweb.com" className="block text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors">hello@soraweb.com</a>
                            <p className="text-slate-400">+62 812 3456 7890</p>
                        </div>

                        {/* Center: CTA Button */}
                        <div className="md:col-span-6 flex flex-col items-center justify-center relative order-1 md:order-2 mb-10 md:mb-0">
                            {/* Curved Line Decoration */}
                            <div className="hidden md:block absolute -top-20 w-full h-full pointer-events-none opacity-30">
                                <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-black">
                                    <path d="M0 50 C 50 50, 150 50, 200 80" strokeDasharray="4 4" />
                                </svg>
                            </div>

                            <Button className="relative z-10 bg-blue-700 hover:bg-blue-600 text-white rounded-full h-20 px-10 text-xl font-semibold shadow-[0_0_50px_-10px_rgba(29,78,216,0.5)] hover:shadow-[0_0_60px_-5px_rgba(29,78,216,0.7)] transition-all duration-300 scale-100 hover:scale-105 group">
                                Start a Project
                                <div className="bg-white text-blue-700 rounded-full p-2 ml-4 group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </Button>
                        </div>

                        {/* Right: Address or Links */}
                        <div className="md:col-span-3 text-left md:text-right space-y-4 order-3">
                            <h3 className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-4">Visit Us</h3>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Politeknik Negeri Malang<br />
                                Indonesia, Jawa Timur
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom: Links & Copyright */}
                <div className="w-full border-t border-white/10 pt-8 mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
                    {/* Logo/Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400"></div>
                        <span className="font-bold text-xl tracking-tight">Soraweb</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-8">
                        {['Service', 'Portfolio', 'Work', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Soraweb Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
