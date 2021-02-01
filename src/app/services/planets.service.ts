import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet, PlanetList } from 'src/app/model/planet'

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(public http: HttpClient) { }

  getAllPlanets(url: string): Observable<PlanetList> {
    return this.http.get<PlanetList>(url);
  }

  getPlanetByID(url: string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }
}
