import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  listPosts:any=[];

  getPosts() {
    return this.http.get('https://backspacoment.herokuapp.com/coments')
  }

  postMensagem(post: Post) {
    return this.http.post('https://backspacoment.herokuapp.com/sending-coment', post)
  }

}
