import { Injectable } from "@angular/core";
import { Post } from "../Post";
import { Subject } from "rxjs";

@Injectable()
export class PostsService {
  posts: Post[] = [
    new Post(
      1,
      "Mon premier post",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      10,
      new Date()
    ),
    new Post(
      2,
      "Mon deuxième post",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      -3,
      new Date()
    ),
    new Post(
      3,
      "Encore un post",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      0,
      new Date()
    )
  ];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(id: number) {
    this.posts.splice(id, 1);
    this.emitPosts();
  }
}
