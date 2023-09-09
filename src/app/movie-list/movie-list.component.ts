import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies=[
    'Rudhran',
    'Anjaan',
    'Baasha',
    'Mersal'
  ]
  
  constructor() {
    
   
    
    
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  }

  







