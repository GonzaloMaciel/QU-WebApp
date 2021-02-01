import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PlanetsService} from 'src/app/services/planets.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-planetlist',
  templateUrl: './planetlist.component.html',
  styleUrls: ['./planetlist.component.css']
})
export class PlanetlistComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'diameter', 'gravity', 'population','rotation_period', 'surface_water', 'terrain'];
  dataSource =  new MatTableDataSource();
  
  constructor( private planetServices: PlanetsService, private _router: Router 
    ) {
    this.getPlanets();
   }

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  mainMenu(){
    this._router.navigate(['home']);
  }

  getPlanets(){
    this.planetServices
    .getAllPlanets('https://swapi.dev/api/planets/')
    .subscribe( data => {
      this.dataSource.data = data.results;
    }); 
  }

  onRowClicked(row) {
    var data = (row.match(/(\d+)/g) || []);
    var id = data[0]
    this._router.navigate(['/planet', id]);
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
