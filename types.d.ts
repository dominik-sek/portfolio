//
interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  liveUrl: string;
  githubUrl?: string;
  imageUrl: string;
  technologies: string[];
  starred: boolean;
}
interface Technology {
  title: string;
  icon: string;
}

type ProjectStatus = 'Completed' | 'In Progress' | 'On Hold' | 'Cancelled';
