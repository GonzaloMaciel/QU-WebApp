import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {PlanetlistComponent } from './components/planetlist/planetlist.component';
import {PeoplelistComponent } from './components/peoplelist/peoplelist.component';
import{ FilmlistComponent } from './components/filmlist/filmlist.component'; 

import {PlanetComponent } from './components/planet/planet.component';
import {PeopleComponent } from './components/people/people.component';
import{ FilmComponent } from './components/film/film.component'; 

const routes: Routes = [
  { path: 'home', component: HomeComponent},
   { path: '', component: HomeComponent },
   { path: 'planetlist', component: PlanetlistComponent },
   { path: 'peoplelist', component: PeoplelistComponent },
   { path: 'filmlist', component: FilmlistComponent },
   { path: 'planet/:id', component: PlanetComponent },
   { path: 'people/:id', component: PeopleComponent },
   { path: 'film/:id', component: FilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
