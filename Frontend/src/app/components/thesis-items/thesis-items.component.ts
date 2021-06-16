import { Component, OnInit, Input, Output } from '@angular/core';
import { Thesis } from '../../Thesis';

@Component({
  selector: 'app-thesis-items',
  templateUrl: './thesis-items.component.html',
  styleUrls: ['./thesis-items.component.css'],
})
export class ThesisItemsComponent implements OnInit {
  @Input() thesis: Thesis = {} as Thesis;

  constructor() {}

  ngOnInit(): void {}
}
