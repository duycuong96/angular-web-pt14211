import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post'
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'app-edit-post-manager',
  templateUrl: './edit-post-manager.component.html',
  styleUrls: ['./edit-post-manager.component.scss']
})
export class EditPostManagerComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
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
            this.post = data;
          }
        )
      }
    )
  }

  updatePost(){
    this.postService.updatePost(this.post).subscribe(
      data => {
        this.router.navigateByUrl('/admin/post');
      }
    )
  }

}
