import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from 'src/app/services/people.service'
import { People } from 'src/app/model/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  id: number;
  people: People;
  constructor(private route: ActivatedRoute, private peopleServices: PeopleService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPeopleInfo();
  }

  getPeopleInfo() {
    this.peopleServices
      .getPeopleByID('https://swapi.dev/api/people/' + this.id)
      .subscribe(data => {
        this.people = data;
      });
  }
}
