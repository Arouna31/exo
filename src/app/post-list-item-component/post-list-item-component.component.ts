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
  @Input() id: number;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  onLike() {
    this.getPost.loveIts++;
  }

  onUnlike() {
    this.getPost.loveIts--;
  }

  onDeletePost(id: number) {
    this.postsService.removePost(id);
    this.postsService.emitPosts();
  }
}
