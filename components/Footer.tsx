
import React from 'react';
import { Mail, Phone, Linkedin, Github, Globe, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-bold gradient-text">Marciah M.</span>
            <p className="text-slate-400 leading-relaxed">
              Passionate about creating intelligent systems and providing data-driven insights to help businesses grow in the era of Artificial Intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/marciah-malangwane-6b740b272" className="p-3 glass rounded-xl text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 glass rounded-xl text-slate-400 hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:malangwanemarciah@gmail.com" className="p-3 glass rounded-xl text-slate-400 hover:text-indigo-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Contact Info</h4>
            <div className="space-y-4">
              <a href="tel:0796891078" className="flex items-center space-x-4 text-slate-400 hover:text-white transition-colors">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Phone size={18} />
                </div>
                <span>079 689 1078</span>
              </a>
              <a href="mailto:malangwanemarciah@gmail.com" className="flex items-center space-x-4 text-slate-400 hover:text-white transition-colors">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Mail size={18} />
                </div>
                <span>malangwanemarciah@gmail.com</span>
              </a>
              <div className="flex items-center space-x-4 text-slate-400">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Globe size={18} />
                </div>
                <span>Midrand, South Africa</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Newsletter</h4>
            <p className="text-slate-400 text-sm">Stay updated with my latest AI projects and insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-sm font-bold transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Marciah Malangwane. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>for the Future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
