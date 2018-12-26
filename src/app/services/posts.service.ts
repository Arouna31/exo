import { Injectable } from "@angular/core";
import { Post } from "../Post";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsService {
  posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {}

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  savePostOnServer() {
    this.httpClient
      .put("https://post-aa9d5.firebaseio.com/posts.json", this.posts)
      .subscribe(
        () => {
          console.log("Données enregistrées");
        },
        error => {
          console.log(`Une erreur est survenue : ${error}`);
        }
      );

    this.emitPosts();
  }

  getPostOnServer() {
    this.httpClient
      .get<any[]>("https://post-aa9d5.firebaseio.com/posts.json")
      .subscribe(
        posts => {
          this.posts = posts;
          this.emitPosts();
        },
        error => {
          console.log(`Une erreur s'est produite ${error}`);
        }
      );
  }

  removePost(postId: number) {
    this.posts.splice(postId, 1);
    this.savePostOnServer();
    this.emitPosts();
  }

  likePost(postId: number) {
    const postIdInPostsArray: number = postId--;

    this.posts[postIdInPostsArray].loveIts++;
    this.savePostOnServer();
    this.emitPosts();
  }

  unlikePost(postId: number) {
    const postIdInPostsArray: number = postId--;

    this.posts[postIdInPostsArray].loveIts--;
    this.savePostOnServer();
    this.emitPosts();
  }
}
