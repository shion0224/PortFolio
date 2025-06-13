
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface NavLinkItem {
  href: string;
  label: string;
}
