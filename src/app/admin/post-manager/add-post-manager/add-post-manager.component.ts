import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-post-manager',
  templateUrl: './add-post-manager.component.html',
  styleUrls: ['./add-post-manager.component.scss']
})
export class AddPostManagerComponent implements OnInit {

  post: Post = new Post();
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPost(){
    this.postService.addPost(this.post).subscribe(
      data => this.router.navigateByUrl('admin/post')
    )
  }

}
