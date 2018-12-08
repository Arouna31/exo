import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postArray: Post[];

  constructor() { }

  ngOnInit() {
  }

}
