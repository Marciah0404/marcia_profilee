
import React from 'react';
import { 
  Bot, 
  Layout, 
  Wand2, 
  FileText, 
  HeartPulse, 
  ShieldCheck, 
  Cpu,
  Database,
  Code,
  PieChart,
  Target
} from 'lucide-react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Concept Chatbot',
    description: 'An intelligent conversational agent designed to explain complex AI concepts to beginners.',
    url: 'https://landbot.online/v3/H-3247334-JPVCJL54HYNG1KCS/index.html',
    tags: ['NLP', 'UI/UX', 'Customer Education'],
    icon: 'Bot',
    category: 'AI'
  },
  {
    id: 'sector-ai',
    title: 'Sector-Specific AI Prototype',
    description: 'A vertical-focused AI solution tailored for specific industry automation needs.',
    url: 'https://chord-remote-66686788.figma.site/',
    tags: ['Figma', 'Product Strategy', 'Automation'],
    icon: 'Layout',
    category: 'AI'
  },
  {
    id: 'content-gen',
    title: 'Custom Content Generator',
    description: 'Advanced LLM implementation for generating architecture and design-focused content.',
    url: 'https://musedivas.netlify.app/',
    tags: ['Generative AI', 'React', 'LLM'],
    icon: 'Wand2',
    category: 'AI'
  },
  {
    id: 'resume-builder',
    title: 'AI Resume Builder',
    description: 'Intelligent tool that helps candidates optimize their resumes for ATS and job descriptions.',
    url: 'https://hiremeresumebuilder.netlify.app/',
    tags: ['ATS Optimization', 'AI', 'Full-stack'],
    icon: 'FileText',
    category: 'Development'
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentimental Analysis',
    description: 'Real-time emotion tracking and sentiment evaluation tool for text datasets.',
    url: 'https://sentimentscope.lovable.app/',
    tags: ['Data Science', 'Python', 'Sentiment'],
    icon: 'HeartPulse',
    category: 'Data'
  },
  {
    id: 'bias-audit',
    title: 'Bias Audit Report',
    description: 'Comprehensive analysis of algorithmic bias and ethical AI implementation strategies.',
    url: 'https://colab.research.google.com/drive/1Nz355p12YJtbphWOagSEGUEl1z8L0oxy?usp=sharing',
    tags: ['Ethical AI', 'Research', 'Colab'],
    icon: 'ShieldCheck',
    category: 'Data'
  },
  {
    id: 'end-to-end',
    title: 'End-to-End AI Solution',
    description: 'A complete machine learning pipeline from data ingestion to deployment in a production-ready environment.',
    url: 'https://ai.studio/apps/drive/1NJfKYuP8M6XE6zbcv1cuNrSBWrYT09Sv',
    tags: ['MLOps', 'Systems Architecture', 'AI'],
    icon: 'Cpu',
    category: 'AI'
  }
];

export const SKILLS: Skill[] = [
  {
    category: "AI & Machine Learning",
    items: ["AI Fundamentals", "Machine Learning Basics", "Prompt Engineering", "Ethical AI", "Responsible AI", "Model Optimization"],
    icon: 'Cpu'
  },
  {
    category: "Data & Analysis",
    items: ["SQL", "Microsoft Excel (Advanced)", "Power BI", "Data Cleaning", "Data Visualization", "Python for Analysis"],
    icon: 'Database'
  },
  {
    category: "Development",
    items: ["Python", "C#", "HTML/CSS", "ASP.NET MVC", "React", "Linux Fundamentals"],
    icon: 'Code'
  },
  {
    category: "Business Analysis",
    items: ["BPMN", "Requirements Documentation", "Process Mapping", "Stakeholder Communication", "IT Project Management"],
    icon: 'PieChart'
  }
];

export const getIcon = (name: string) => {
  const props = { size: 24, className: "text-indigo-400" };
  switch (name) {
    case 'Bot': return <Bot {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'Wand2': return <Wand2 {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'HeartPulse': return <HeartPulse {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Code': return <Code {...props} />;
    case 'PieChart': return <PieChart {...props} />;
    case 'Target': return <Target {...props} />;
    default: return <Code {...props} />;
  }
};
