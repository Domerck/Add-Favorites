import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Favorite } from './../Favorite';
import { Thesis } from './../Thesis';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private apiUrl = 'http://localhost:5000/favorite';

  constructor(private http: HttpClient) {}
  //get list of favorites
  addFavorite(thesis: Thesis): Observable<Favorite[]> {
    return this.http.post<Favorite[]>(this.apiUrl, thesis);
  }

	getFavorites(): Observable<Favorite[]> {
		return this.http.get<Favorite[]>(this.apiUrl)
	}

  deleteFavorite(favorite: Favorite): Observable<Favorite> {
    const url = `${this.apiUrl}/${favorite._id}`;
    return this.http.delete<Favorite>(url);
  }

}
