import { FavoriteService } from './../../services/favorite.service';
import { Thesis } from './../../Thesis';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

declare var M: any;

@Component({
  selector: 'app-favorites-btn',
  templateUrl: './favorites-btn.component.html',
  styleUrls: ['./favorites-btn.component.css'],
})
export class FavoritesBtnComponent implements OnInit {
  @Input() thesis: Thesis = {} as Thesis;
  faHeart = faHeart;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {}

  addToFavorites() {
    this.favoriteService.addFavorite(this.thesis).subscribe();
    alert("Added to Favorites")
  
  }
}
