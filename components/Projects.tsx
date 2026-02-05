
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, getIcon } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Capstone Showcase</h2>
          <p className="text-slate-400 max-w-xl">
            A comprehensive collection of AI prototypes and technical solutions developed during the intensive AI/ML bootcamp.
          </p>
        </div>
        <div className="flex space-x-2">
          <span className="px-4 py-2 glass rounded-full text-sm text-indigo-400 border border-indigo-400/20">All Works</span>
          <span className="px-4 py-2 glass rounded-full text-sm text-slate-500 hover:text-white cursor-pointer">Live Demos</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative glass rounded-3xl overflow-hidden border border-white/5 flex flex-col h-full">
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {getIcon(project.icon)}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-1">{project.category}</span>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-slate-400">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                {project.description}
              </p>
            </div>
            
            <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-3">
              <Link 
                to={`/view/${project.id}`} 
                className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-600/10"
              >
                <span>Interactive View</span>
                <ArrowUpRight size={14} />
              </Link>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center space-x-2 glass hover:bg-white/10 text-slate-300 px-4 py-3 rounded-xl text-sm font-bold transition-all"
              >
                <span>External Link</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
