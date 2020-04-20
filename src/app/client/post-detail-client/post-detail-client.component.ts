import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service'

@Component({
  selector: 'app-post-detail-client',
  templateUrl: './post-detail-client.component.html',
  styleUrls: ['./post-detail-client.component.scss']
})
export class PostDetailClientComponent implements OnInit {

  post: Post

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.route.params.subscribe(
      param => {
        this.postService.getPost(param.postId).subscribe(
          data => {
            this.post = data;
          }
        )
      }
    )
  }

}
