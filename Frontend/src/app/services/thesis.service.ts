import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Thesis } from '../Thesis';
//import { THESES } from '../mock-thesis';

@Injectable({
  providedIn: 'root'
})

export class ThesisService {
   private apiUrl = 'http://localhost:5000/thesisrepo'

  constructor(private http:HttpClient) { }
  //get list of theses
  getThesis(): Observable<Thesis[]> {
    return this.http.get<Thesis[]>(this.apiUrl);
  } 
}
