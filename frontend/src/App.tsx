import { Figma, Github } from 'lucide-react';
import { Navbar } from '@/components/widget/Navbar';
import { About } from '@/components/widget/About';
import { Footer } from '@/components/widget/Footer';
import { Team } from '@/components/widget/Team';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      </div>
      <Navbar />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <div className="flex items-center gap-3 mb-2 animate-fade-in-down">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-black text-lg">120+</span>
            <span className="text-black/60 font-semibold text-lg">Happy Clients</span>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="hidden md:block absolute left-[1%] top-30 animate-float-delay-1 z-20">
            <div className="bg-white/40 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 transform -rotate-12">
              <Github className="w-8 h-8 text-slate-800" />
            </div>
          </div>
          <div className="hidden md:block absolute left-[1%] opacity-50 top-40 animate-float-delay-2 z-10">
            <div className="bg-white/40 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 transform rotate-6">
              <Figma className="w-8 h-8 text-slate-800" />
            </div>
          </div>

          <div className="hidden md:block absolute -right-[0%] top-32 animate-float-delay-3 z-20">
            <div className="bg-white/40 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 transform rotate-12">
              <svg className="w-8 h-8 text-slate-800 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3414C17.523 15.3414 17.568 15.3414 17.5898 15.3414C17.6533 15.3414 17.7088 15.3414 17.7479 15.3438C17.7663 15.345 17.7818 15.3457 17.7947 15.3463C17.8106 15.3472 17.8225 15.3479 17.8313 15.3484C17.8378 15.3488 17.8427 15.3491 17.8459 15.3493L17.854 15.3498L18.6636 16.7196C18.8258 16.9942 18.7307 17.3444 18.451 17.5027C18.1714 17.6611 17.8131 17.5678 17.6532 17.2941L16.9189 16.052C15.9328 16.4952 14.7937 16.7643 13.5607 16.7905L13.5607 16.7905L13.5607 16.792H10.4393L10.4393 16.7905L10.4393 16.7904C9.20623 16.7642 8.06714 16.4952 7.08104 16.052L6.34676 17.2941C6.18683 17.5678 5.82855 17.6611 5.54898 17.5027C5.26938 17.3444 5.17424 16.9942 5.33644 16.7196L6.14605 15.3498L6.15413 15.3493C6.15732 15.3491 6.16223 15.3488 6.16872 15.3484C6.1775 15.3479 6.1894 15.3472 6.20526 15.3463C6.21815 15.3457 6.23374 15.345 6.25206 15.3438C6.29119 15.3414 6.34673 15.3414 6.41016 15.3414C6.43202 15.3414 6.47697 15.3414 6.47697 15.3414C2.86878 13.4076 0.368317 9.53077 0.0263672 5.08643H23.9736C23.6317 9.53077 21.1312 13.4076 17.523 15.3414ZM6.64923 8.35626C6.64923 8.87973 7.08182 9.30397 7.61545 9.30397C8.14908 9.30397 8.58167 8.87973 8.58167 8.35626C8.58167 7.83279 8.14908 7.40854 7.61545 7.40854C7.08182 7.40854 6.64923 7.83279 6.64923 8.35626ZM16.3846 9.30397C16.9182 9.30397 17.3508 8.87973 17.3508 8.35626C17.3508 7.83279 16.9182 7.40854 16.3846 7.40854C15.8509 7.40854 15.4183 7.83279 15.4183 8.35626C15.4183 8.87973 15.8509 9.30397 16.3846 9.30397Z" />
              </svg>
            </div>
          </div>
          <div className="hidden md:block absolute opacity-50 -right-[0%] top-42 animate-float-delay-4 z-10">
            <div className="bg-white/40 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50 transform -rotate-12">
              <svg className="w-8 h-8 text-slate-800 fill-current" viewBox="0 0 24 24">
                <path d="M17.653 16.598C16.891 17.701 15.845 19.255 14.502 19.255C13.208 19.255 12.825 18.468 11.293 18.468C9.722 18.468 9.243 19.217 8.036 19.255C6.733 19.293 5.564 17.615 4.702 16.368C2.92 13.781 1.579 9.47 3.399 6.326C4.3 4.774 5.928 3.797 7.653 3.797C8.956 3.797 10.124 4.678 10.929 4.678C11.696 4.678 12.999 3.606 14.732 3.606C15.46 3.644 17.376 3.913 18.66 5.81C18.583 5.848 16.533 7.037 16.533 9.662C16.533 12.787 19.062 13.822 19.196 13.86C19.1 14.339 18.525 15.908 17.653 16.598ZM14.483 2.188C15.192 1.307 15.116 0.444 15.116 0.444C13.928 0.483 12.569 1.288 11.726 2.265C10.998 3.127 11.036 4.028 11.036 4.028C12.358 4.066 13.754 3.05 14.483 2.188Z" />
              </svg>
            </div>
          </div>

          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[1.1] md:leading-[1.1] mb-6 drop-shadow-sm">
            Your Strategic Partner for Building World-Class Website
          </h1>

          <p className="text-slate-700 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Soraweb is more than just a website development service provider, but also a trusted collaborator focused on helping clients create amazing websites.
          </p>

          <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-5 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group">
            Mending lihat project kita, dibawah 😁
          </Button>
        </div>

      </div>
      <About />
      <Team />
      <Footer />
      <div className="fixed top-20 left-20 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none animate-pulse-slow delay-75"></div>
    </div>
  );
}
