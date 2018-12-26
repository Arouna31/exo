import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../Post";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item-component.component.html",
  styleUrls: ["./post-list-item-component.component.scss"]
})
export class PostListItemComponentComponent implements OnInit {
  @Input() getPost: Post;
  @Input() postId: number;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  onLike() {
    this.postsService.likePost(this.postId);
  }

  onUnlike() {
    this.postsService.unlikePost(this.postId);
  }

  onDeletePost(postId: number) {
    this.postsService.removePost(postId);
  }
}
