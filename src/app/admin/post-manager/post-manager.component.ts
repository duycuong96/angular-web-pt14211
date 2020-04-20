import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post-manager',
  templateUrl: './post-manager.component.html',
  styleUrls: ['./post-manager.component.scss',

]
})
export class PostManagerComponent implements OnInit {

  posts: Post[];
  page = 1;
  pageSize = 10;

  constructor(
    private postService: PostService,
    config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      data => {
        this.posts = data
      }
    )
  }

  removePost(id){
    this.postService.removePost(id).subscribe(
      data => {
        this.posts = this.posts.filter(
          post => post.id != data.id
        );
      }
    )
  }

}
