
import React from 'react';
import { Target, Star, Shield, Briefcase, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center space-x-3">
              <Zap className="text-indigo-500" />
              <span>Personal Branding Statement</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>
          
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            "I bridge the gap between complex data systems and strategic business goals, utilizing cutting-edge AI to automate, optimize, and humanize technology for the future."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
              <Target className="text-indigo-400 mb-4" size={28} />
              <h4 className="font-bold text-white mb-2">Career Objective</h4>
              <p className="text-sm text-slate-400">To leverage my ICT and AI expertise in a dynamic AI/ML position that challenges my analytical thinking.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
              <Shield className="text-purple-400 mb-4" size={28} />
              <h4 className="font-bold text-white mb-2">Ethical AI</h4>
              <p className="text-sm text-slate-400">Committed to bias mitigation and responsible development standards across the machine learning lifecycle.</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="glass p-10 rounded-[3rem] space-y-10 border border-white/10 relative z-10">
            <h3 className="text-2xl font-bold text-center">Marciah at a Glance</h3>
            
            <div className="space-y-6">
              {[
                { label: "Graduated", val: "Durban University of Tech", sub: "ICT: Business Analysis" },
                { label: "Location", val: "Midrand, South Africa", sub: "Open to Relocation" },
                { label: "Focus", val: "AI & Full Stack Dev", sub: "React, Python, LLMs" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-indigo-400">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-lg font-bold text-white">{stat.val}</p>
                    <p className="text-xs text-slate-400">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5 text-center">
              <p className="text-slate-500 text-sm">"Detail-oriented ICT graduate with a flair for AI innovation."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
