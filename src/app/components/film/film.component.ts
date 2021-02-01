import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FilmService} from 'src/app/services/film.service'
import {Film} from 'src/app/model/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
 id: number;
 film: Film;
  constructor(private route: ActivatedRoute, private filmServices: FilmService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {   
    this.getFilmInfo();
  }

  getFilmInfo(){
    this.filmServices
    .getFilmByID('https://swapi.dev/api/films/' + this.id)
    .subscribe( data => {
      this.film = data;      
    }); 
  }

}
