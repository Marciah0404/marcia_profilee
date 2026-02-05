
import React from 'react';
import { MapPin, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const resumeUrl = "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/marciah_malangwane_capaciti_org_za/IQAi6mS2QE77TKrNdaYEh1bkAfhYBistfFDmpTe4fTJ_tQw?e=Mq6kPl";

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Available for Hire</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-slate-400">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Marciah <span className="gradient-text">Malangwane</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              A <span className="text-white font-semibold">Full-Stack Developer</span> & ICT Graduate bridging business analysis with advanced 
              <span className="text-indigo-400 font-semibold"> AI Solutions</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center space-x-2 text-slate-400 glass px-4 py-2 rounded-xl">
              <MapPin size={18} className="text-indigo-400" />
              <span className="text-sm">Midrand, Gauteng</span>
            </div>
            <div className="flex space-x-3">
              <a href="https://linkedin.com/in/marciah-malangwane-6b740b272" target="_blank" rel="noopener noreferrer" className="p-2.5 glass rounded-xl hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:malangwanemarciah@gmail.com" className="p-2.5 glass rounded-xl hover:text-indigo-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
            >
              <span>View Portfolio</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/5 active:scale-95"
            >
              <Download size={20} />
              <span>Get Resume</span>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative group">
            {/* Decorative Frames */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-indigo-500/30 rounded-tr-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-purple-500/30 rounded-bl-3xl"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl glass p-2 transform transition-transform duration-700 hover:rotate-2">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQFPBzdwdMJLPQ/profile-displayphoto-shrink_200_200/B4DZfVuJfGG8AY-/0/1751637335617?e=1772064000&v=beta&t=tpPT2Gj0W_ti4rBI_b51fS_azOJCgm0NMXBeuFlU-qI" 
                alt="Marciah Malangwane Profile" 
                className="w-full max-w-[400px] aspect-[3/4] object-cover rounded-[2rem]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 glass p-4 rounded-2xl border border-white/10 shadow-xl hidden md:block animate-bounce animation-delay-1000">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-500 p-2 rounded-lg text-white">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Bootcamp</p>
                  <p className="text-sm font-bold text-white">Full Projects Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
