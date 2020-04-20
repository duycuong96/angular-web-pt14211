import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post-manager',
  templateUrl: './post-manager.component.html',
  styleUrls: ['./post-manager.component.scss']
})
export class PostManagerComponent implements OnInit {

  posts: Post[];
  page = 1;
  pageSize = 10;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {

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
