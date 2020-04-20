import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service'

@Component({
  selector: 'app-post-client',
  templateUrl: './post-client.component.html',
  styleUrls: ['./post-client.component.scss']
})
export class PostClientComponent implements OnInit {

  posts: Post[];
  page = 1;
  pageSize = 6;

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

}
