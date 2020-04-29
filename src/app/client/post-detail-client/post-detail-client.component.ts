import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {Comment} from '../../models/comment';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-post-detail-client',
  templateUrl: './post-detail-client.component.html',
  styleUrls: ['./post-detail-client.component.scss']
})
export class PostDetailClientComponent implements OnInit {

  post: Post;
  comment: Comment = new Comment();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.route.params.subscribe(
      param => {
        this.postService.getPost(param.postId).subscribe(

          data => {
            console.log(data);
            this.post = data;
          }
        )
      }
    )
  }

  addComment(){
    this.commentService.addComment(this.comment).subscribe(
      data => this.router.navigateByUrl('home')
    )
  }

}
