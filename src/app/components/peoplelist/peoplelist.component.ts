import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { PeopleService} from 'src/app/services/people.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color','skin_color', 'eye_color', 'birth_year', 'gender'];
  dataSource =  new MatTableDataSource();
  
  constructor( private peopleServices: PeopleService, private _router: Router
    ) {
    this.getPeople();
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
    this._router.navigate(['/people', id]);
}

   getPeople(){
    this.peopleServices
    .getAllPeoples('https://swapi.dev/api/people/')
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
