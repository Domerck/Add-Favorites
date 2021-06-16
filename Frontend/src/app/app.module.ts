import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThesisComponent } from './components/thesis/thesis.component';
import { ThesisItemsComponent } from './components/thesis-items/thesis-items.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesItemsComponent } from './components/favorites-items/favorites-items.component';
import { FavoritesBtnComponent } from './components/favorites-btn/favorites-btn.component';

import {ThesisService} from './services/thesis.service';
import {FavoriteService} from './services/favorite.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThesisComponent,
    ThesisItemsComponent,
    FavoritesComponent,
    FavoritesItemsComponent,
    FavoritesBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
