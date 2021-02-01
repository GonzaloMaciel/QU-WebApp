import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { FilmService} from 'src/app/services/film.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.css']
})
export class FilmlistComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['title','episode_id','director', 'producer', 'release_date'];
  dataSource =  new MatTableDataSource();

  constructor( private filmServices: FilmService, private _router: Router 
    ) {
    this.getFilms();
   }

   ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  mainMenu(){
    this._router.navigate(['home']);
  }

  onRowClicked(row) {
    var data = (row.match(/(\d+)/g) || []);
    var id = data[0]
    this._router.navigate(['/film', id]);
}

   getFilms(){
    this.filmServices
    .getAllFilms('https://swapi.dev/api/films/')
    .subscribe( data => {
      this.dataSource.data = data.results;
    }); 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
