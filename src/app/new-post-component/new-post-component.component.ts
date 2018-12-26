import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PostsService } from "../services/posts.service";
import { Post } from "../Post";

@Component({
  selector: "app-new-post-component",
  templateUrl: "./new-post-component.component.html",
  styleUrls: ["./new-post-component.component.scss"]
})
export class NewPostComponentComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private router: Router,
    private postsService: PostsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      content: ["", [Validators.required]]
    });
  }

  onAddPost() {
    const title = this.postForm.get("title").value;
    const content = this.postForm.get("content").value;
    const postId =
      this.postsService.posts[this.postsService.posts.length - 1].id + 1;
    const newPost: Post = new Post(postId, title, content, 0, new Date());

    this.postsService.addNewPost(newPost);
    this.postsService.savePostOnServer();
    this.router.navigate(["/posts"]);
  }
}
