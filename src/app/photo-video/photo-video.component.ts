import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-video',
  templateUrl: './photo-video.component.html',
  styleUrls: ['./photo-video.component.scss']
})
export class PhotoVideoComponent implements OnInit {
  
  Photography='Photos/Images'
  image1='https://im.rediff.com/300-300/movies/2014/aug/18anjaan.jpg';
  image2='https://pbs.twimg.com/profile_images/1214454249796456449/8YgM8YE9_400x400.jpg';
  image3='https://m.media-amazon.com/images/I/41EnVcVBmaL.jpg';
  image4='https://m.media-amazon.com/images/M/MV5BNmE0OTJlZmUtODA0ZC00Yjc2LThjNDItYjFkYjA4YzhkMzZkXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg';
  image5='https://m.media-amazon.com/images/M/MV5BNGY5NTI3NmQtMGYxMy00N2ZlLTg2YmUtMjNkYTQ3ZTJkYzliXkEyXkFqcGdeQXVyMTMwOTgxMTA4._V1_.jpg';
    

  constructor() {
   
   
   }

  ngOnInit() {

  }

}
