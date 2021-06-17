import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorites-btn',
  templateUrl: './favorites-btn.component.html',
  styleUrls: ['./favorites-btn.component.css'],
})
export class FavoritesBtnComponent implements OnInit {
  faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}
}
