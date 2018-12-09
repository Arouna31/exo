import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() getPost: Post;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.getPost.loveIts++;
  }

  onUnlike() {
    this.getPost.loveIts--;

  }

}
