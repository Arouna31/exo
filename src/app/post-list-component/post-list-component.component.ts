import { Component, OnInit } from "@angular/core";

import { Post } from "../Post";
import { Subscription } from "rxjs";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list-component.component.html",
  styleUrls: ["./post-list-component.component.scss"]
})
export class PostListComponentComponent implements OnInit {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postsSubscription.unsubscribe();
  }
}
