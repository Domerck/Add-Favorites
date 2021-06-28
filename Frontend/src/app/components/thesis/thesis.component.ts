import { Component, OnInit } from '@angular/core';

import { Thesis } from '../../Thesis';
import { ThesisService } from '../../services/thesis.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css'],
})
export class ThesisComponent implements OnInit {
  theses: Thesis[] = [];

  constructor(private thesisService: ThesisService) {}

  ngOnInit(): void {
     this.thesisService.getThesis().subscribe((theses) => (this.theses = theses));
  }
}
