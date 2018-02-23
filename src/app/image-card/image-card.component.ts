import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Nature',
    api: 'https://source.unsplash.com/random',
    fontsize: 40
  };
  public src: string;
  constructor() { }

  ngOnInit() {
    this.src = this.image.api;
  }
  updateSrc() {
    this.src = 'dsfd';
    window.location.reload();
    this.src = this.image.api;
  }

}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
