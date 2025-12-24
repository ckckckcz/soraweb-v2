import { ArrowUpRight } from 'lucide-react';

export const Navbar = () => {

    return (
        <div className="fixed -top-6 left-0 right-0 z-50 p-4 md:p-6">
            <nav className="relative bg-white/80 backdrop-blur-md rounded-b-3xl px-8 py-4 flex items-center justify-between max-w-7xl mx-auto border border-white/20">
                {/* Left: Tagline */}
                <div className="hidden md:flex items-center">
                    <span className="text-sm font-semibold text-blue-700 tracking-wide">With Sora, we build together.</span>
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                    <img src="/logo.png" width={1920} height={1080} className='w-7 rounded-full h-full' alt="" />
                    <span className="font-bold text-xl tracking-tight text-slate-900">Soraweb</span>
                </div>

                {/* Right: CTA */}
                <div className="flex items-center gap-4 ml-auto md:ml-0">
                    <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wider transition-all shadow-md hover:shadow-lg">
                        Gas Kolaborasi <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </nav>
        </div>
    );
};
