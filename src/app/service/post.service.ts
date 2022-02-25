import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>('https://backspacoment.herokuapp.com/coments')
  }

  postMensagem(post: Post) {
    return this.http.post('https://backspacoment.herokuapp.com/sending-coment', post)
  }

}
