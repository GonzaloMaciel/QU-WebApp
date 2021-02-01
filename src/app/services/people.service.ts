import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People, PeopleList } from 'src/app/model/people'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(public http: HttpClient) { }

  getAllPeoples(url: string): Observable<PeopleList> {
    return this.http.get<PeopleList>(url);
  }

  getPeopleByID(url: string): Observable<People> {
    return this.http.get<People>(url);
  }
}