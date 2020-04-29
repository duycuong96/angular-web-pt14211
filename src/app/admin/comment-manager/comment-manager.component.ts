import { Component, OnInit } from '@angular/core';

import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-manager',
  templateUrl: './comment-manager.component.html',
  styleUrls: ['./comment-manager.component.scss']
})
export class CommentManagerComponent implements OnInit {

  comments: Comment[];
  page = 1;
  pageSize = 10;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.commentService.getComments().subscribe(
      data => {
        this.comments = data
      }
    )
  }

  removeComment(id){
    this.commentService.removeComment(id).subscribe(
      data => {
        this.comments = this.comments.filter(
          comment => comment.id != data.id
        );
      }
    )
  }

}
