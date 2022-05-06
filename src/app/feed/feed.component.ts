import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  post: Post = this.postService.getDefaultPost();

  postForm = new FormGroup({
    name: new FormControl(''),
    message: new FormControl('')
  });

  coments: Post[];
  nome: string;


  constructor(private postService: PostService, private router: Router) { }


  ngOnInit(): void {
    this.findPosts()

  }

  findPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.coments = data;
    })
  }



  onSubmit() {
    const formValue = this.postForm.value;
      this.post.name = formValue.name;
      this.post.message = formValue.message;
      this.postService.createPost(this.post).subscribe((result) =>{
        alert('Comentario adicionado com sucesso');
        window.location.reload();
      })
  };

}
