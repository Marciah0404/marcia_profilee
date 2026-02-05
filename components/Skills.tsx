
import React from 'react';
import { SKILLS, getIcon } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Competencies</h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skill, index) => (
          <div key={index} className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group">
            <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
              {getIcon(skill.icon)}
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 hover:text-white hover:border-indigo-500/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
