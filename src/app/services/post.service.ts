import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs'

@Injectable()

export class PostService {

  postsApi = 'https://5e9a8b2ebc561b0016af3e46.mockapi.io/post';

  constructor(
    private http: HttpClient
  ){}

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsApi);
  }

  getPost(id): Observable<Post>{
    return this.http.get<Post>(`${this.postsApi}/${id}`);
  }

  removePost(id): Observable<Post>{
    return this.http.delete<Post>(`${this.postsApi}/${id}`);
  }

  addPost(post): Observable<Post>{
    return this.http.post<Post>(`${this.postsApi}`, post);
  }

  updatePost(post): Observable<Post>{
    return this.http.put<Post>(`${this.postsApi}/${post.id}`, post)
  }



}
