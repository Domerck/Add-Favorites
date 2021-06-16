import { Component, OnInit } from '@angular/core';

import { Favorite } from '../../Favorite';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteService
      .getFavorites()
      .subscribe((favorites) => (this.favorites = favorites));
  }
}
