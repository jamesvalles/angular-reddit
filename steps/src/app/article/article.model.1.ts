export class Article {
  title: string;
  link: string;
  votes: number;
  role: string;

  constructor(title: string, link: string, role: string, votes?: number, ) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
    this.role = role;
  }
}