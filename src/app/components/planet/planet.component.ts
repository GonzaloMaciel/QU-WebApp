import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlanetsService} from 'src/app/services/planets.service'
import {Planet} from 'src/app/model/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  id: number;
  planet: Planet;
   constructor(private route: ActivatedRoute, private planetServices: PlanetsService) {
     this.id = this.route.snapshot.params.id;
   }

   ngOnInit(): void {   
    this.getPlanetInfo();
  }

  getPlanetInfo(){
    this.planetServices
    .getPlanetByID('https://swapi.dev/api/planets/' + this.id)
    .subscribe( data => {
      this.planet = data;      
    }); 
  }

}
