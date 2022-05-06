import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  getDefaultPost(): Post {
    return{
      name:'',
      message:''
    }
  }

  constructor(private httpClient: HttpClient) { }


  getPosts() {
    return this.httpClient.get('http://localhost:8082/coments');
  }

  createPost(post: Post) {
    return this.httpClient.post('http://localhost:8082/sending-coment', post);
  }

}
