import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Favorite } from '../../Favorite';

@Component({
  selector: 'app-favorites-items',
  templateUrl: './favorites-items.component.html',
  styleUrls: ['./favorites-items.component.css'],
})
export class FavoritesItemsComponent implements OnInit {
  @Input() favorite: Favorite = {} as Favorite;
  faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}
}
