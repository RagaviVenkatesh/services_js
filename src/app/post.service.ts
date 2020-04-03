import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(){
    return [{id: 1, title: 'Java'}, {id: 2, title: 'C'},
      {id: 3, title: 'C++'}, {id: 4, title: 'Python'}
    ];
  }
  
}
