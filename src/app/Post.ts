export class Post {

  created_at: Date;

  constructor(public title: string, public content: string, public loveIts: number, created_at: Date) {
    this.created_at = created_at;
  }
}