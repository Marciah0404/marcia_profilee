
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS, getIcon } from '../constants';
import { ArrowLeft, ExternalLink, RefreshCw } from 'lucide-react';

const ProjectViewer: React.FC = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/" className="text-indigo-400 flex items-center space-x-2">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass p-6 rounded-2xl border border-white/5">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-indigo-500/10 rounded-xl">
            {getIcon(project.icon)}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="text-sm text-slate-400">{project.description}</p>
          </div>
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 md:flex-none flex items-center justify-center space-x-2 glass hover:bg-white/10 px-6 py-3 rounded-xl font-bold transition-all"
          >
            <ExternalLink size={18} />
            <span>Open Original</span>
          </a>
          <button 
            onClick={() => window.location.reload()} 
            className="p-3 glass hover:bg-white/10 rounded-xl transition-all"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      <div className="relative aspect-video w-full glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[600px]">
        <iframe 
          src={project.url} 
          className="absolute inset-0 w-full h-full bg-white"
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3 text-indigo-400">
          <ArrowLeft size={20} className="animate-pulse" />
          <span className="font-medium">Finished exploring? Return to the main portfolio</span>
        </div>
        <Link 
          to="/" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default ProjectViewer;
