import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Favorite } from '../../Favorite';

@Component({
  selector: 'app-favorites-items',
  templateUrl: './favorites-items.component.html',
  styleUrls: ['./favorites-items.component.css'],
})
export class FavoritesItemsComponent implements OnInit {
  @Input() favorite: Favorite = {} as Favorite;
  @Output() onDeleteFavorite: EventEmitter<Favorite> = new EventEmitter();

  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  onDelete(){
    this.onDeleteFavorite.emit(this.favorite);
  }
}
