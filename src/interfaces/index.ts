export interface IPost {
  id: number;
  title: string;
  body: string;
  date: string;
  image: string;
  lectureTime: string;
  path: string;
}

export interface IProject {
  id: number;
  title: string;
  technologies: string[];
  repositoryLink: string;
  liveLink: string;
  image?: string;
  description?: string;
}
