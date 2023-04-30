//
interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  technologies: string[];
  starred: boolean;
}
type ProjectStatus = 'Completed' | 'In Progress' | 'On Hold' | 'Cancelled';
