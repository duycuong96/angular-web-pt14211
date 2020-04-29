import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs'

@Injectable()

export class CommentService {

  commentsApi = 'https://angular-pt14211-cuongvdph06938.herokuapp.com/comments';

  constructor(
    private http: HttpClient
  ){}

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.commentsApi);
  }

  getComment(id): Observable<Comment>{
    return this.http.get<Comment>(`${this.commentsApi}/${id}`);
  }

  removeComment(id): Observable<Comment>{
    return this.http.delete<Comment>(`${this.commentsApi}/${id}`);
  }

  addComment(comment): Observable<Comment>{
    return this.http.post<Comment>(`${this.commentsApi}`, comment);
  }

  updateComment(comment): Observable<Comment>{
    return this.http.put<Comment>(`${this.commentsApi}/${comment.id}`, comment)
  }



}
