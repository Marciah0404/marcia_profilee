
import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, Mail, Phone, MapPin, Linkedin, CheckCircle2 } from 'lucide-react';

const Resume: React.FC = () => {
  const resumeUrl = "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/marciah_malangwane_capaciti_org_za/IQAi6mS2QE77TKrNdaYEh1bkAfhYBistfFDmpTe4fTJ_tQw?e=Mq6kPl";

  return (
    <section className="py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Career Materials</h2>
        <p className="text-slate-400">Downloadable professional profile for potential employers.</p>
      </div>

      <div className="glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
        {/* Sticky Resume Header */}
        <div className="bg-gradient-to-r from-indigo-900/40 via-[#0a0a0c] to-purple-900/40 p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-600/20 p-4 rounded-2xl border border-indigo-500/20">
              <FileText className="text-indigo-400" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Marciah Malangwane</h2>
              <p className="text-indigo-400 font-medium">ICT Graduate & Full-Stack Developer</p>
            </div>
          </div>
          <a 
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/30 active:scale-95"
          >
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 md:p-12 space-y-12">
          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 text-sm text-slate-300">
            <div className="flex items-center space-x-3"><MapPin size={18} className="text-indigo-400" /> <span>Midrand, 1682</span></div>
            <div className="flex items-center space-x-3"><Phone size={18} className="text-indigo-400" /> <span>079 689 1078</span></div>
            <div className="flex items-center space-x-3"><Mail size={18} className="text-indigo-400" /> <span className="truncate">malangwanemarciah@gmail.com</span></div>
            <div className="flex items-center space-x-3"><Linkedin size={18} className="text-indigo-400" /> <span className="truncate">marciah-malangwane</span></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column (Details) */}
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white border-l-4 border-indigo-600 pl-4">Professional Summary</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light italic">
                  "Detail-oriented and analytical ICT graduate with a strong foundation in business analysis, data analytics, and system improvement. Adept at requirements gathering and translating insights into actionable business solutions."
                </p>
              </section>

              <section className="space-y-6">
                <h3 className="text-xl font-bold text-white border-l-4 border-indigo-600 pl-4">Experience & Projects</h3>
                <div className="space-y-8">
                  {[
                    { title: "Procurement Dashboard (Power BI)", desc: "Developed dashboards to track vendor spend and compliance." },
                    { title: "SQL Inventory System", desc: "Designed a database for inventory and supplier performance tracking." },
                    { title: "Process Optimization", desc: "Improved workflow efficiency through strategic process redesign." }
                  ].map((job, i) => (
                    <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-indigo-500 transition-colors">
                      <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-white/10 group-hover:bg-indigo-500 group-hover:scale-125 transition-all"></div>
                      <h4 className="font-bold text-white text-lg">{job.title}</h4>
                      <p className="text-slate-400 mt-2">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-xl font-bold text-white border-l-4 border-indigo-600 pl-4">Education</h3>
                <div className="pl-8 border-l border-white/10 relative">
                   <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                   <h4 className="font-bold text-white text-lg">Diploma in ICT</h4>
                   <p className="text-indigo-400 font-medium">Business Analysis & Application Development</p>
                   <p className="text-slate-500 text-sm mt-1">Durban University of Technology (DUT) | 2022 – 2024</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                     {['Business Analysis', 'IT Project Management', 'Application Development'].map(m => (
                       <span key={m} className="text-[10px] bg-white/5 px-2 py-1 rounded text-slate-500">{m}</span>
                     ))}
                   </div>
                </div>
              </section>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-12">
              <section className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-indigo-400" />
                  <span>Core Competencies</span>
                </h3>
                <div className="space-y-3">
                  {[
                    "Business Analysis",
                    "AI Fundamentals",
                    "Prompt Engineering",
                    "Automation Concepts",
                    "Ethical AI Use",
                    "Python for Data",
                    "Data Cleaning",
                    "Process Mapping",
                    "Stakeholder Comms"
                  ].map(skill => (
                    <div key={skill} className="flex items-center space-x-2 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4 px-2">
                <h3 className="text-lg font-bold text-white">Technical Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'Python', 'Excel (Adv)', 'C#', 'ASP.NET', 'BPMN', 'SAP', 'Linux'].map(s => (
                    <span key={s} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Briefcase size={80} />
                </div>
                <h4 className="font-bold text-white text-xl mb-4 relative z-10">Availability</h4>
                <div className="space-y-4 relative z-10">
                   <div className="flex items-center space-x-2 text-green-400 font-bold">
                     <CheckCircle2 size={16} />
                     <span>Immediate Start</span>
                   </div>
                   <p className="text-slate-400 text-sm">Open to relocation within South Africa. South African Citizen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
