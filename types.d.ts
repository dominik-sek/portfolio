//
interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  liveUrl: string;
  githubUrl?: string;
  images: Image[];
  technologies: string[];
  starred: boolean;
}
interface Technology {
  title: string;
  icon: string;
}
interface Image {
  src: string;
  alt: string;
}

type ProjectStatus = 'Completed' | 'In Progress' | 'On Hold' | 'Cancelled';
