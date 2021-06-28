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
    this.favoriteService.getFavorites().subscribe((favorites) => (this.favorites = favorites));
  }

  deleteFavorite(favorite: Favorite){
    this.favoriteService.deleteFavorite(favorite).subscribe( () => (this.favorites = this.favorites.filter((f) => f._id !== favorite._id))
    );
  }
}
