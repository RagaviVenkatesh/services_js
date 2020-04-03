import { Component } from '@angular/core';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sevice-app';
  posts = [];
  
//constructor parameter
  constructor(private postService: PostService){
    this.posts = postService.getPosts();
  }
}
