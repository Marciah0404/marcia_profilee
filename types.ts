
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
  category: 'AI' | 'Data' | 'Development';
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}
