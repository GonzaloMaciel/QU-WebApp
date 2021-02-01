import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmComponent } from './components/film/film.component';
import { FilmlistComponent } from './components/filmlist/filmlist.component';
import { PeoplelistComponent } from './components/peoplelist/peoplelist.component';
import { PlanetlistComponent } from './components/planetlist/planetlist.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PeopleComponent,
    FilmComponent,
    FilmlistComponent,
    PeoplelistComponent,
    PlanetlistComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
