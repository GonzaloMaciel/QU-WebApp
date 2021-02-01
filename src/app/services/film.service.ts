import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film, FilmList } from 'src/app/model/film'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(public http: HttpClient) { }

  getAllFilms(url: string): Observable<FilmList> {
    return this.http.get<FilmList>(url);
  }

  getFilmByID(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }
}