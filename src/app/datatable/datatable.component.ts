import { Component, EventEmitter, OnInit } from '@angular/core';
import { DoctorsList } from '../doctors.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  public userDisplay!: DoctorsList[];
  user!: [];
  _filterText: string = '';

  constructor(private dataService: UsersService) {}

  ngOnInit(): void {
    this.getListOfDoctors();
    this.getAddedDoctors();
  }

  //// Getting the list of Doctors.
  getListOfDoctors(): any {
    this.dataService.getDoctorsList().subscribe((data) => {
      this.userDisplay = data;
    });
  }


  //Getting the added doctors
  getAddedDoctors(): any {
    this.dataService.getRegisteredDoctors().subscribe((data) => {
      this.user = data;
    });
  }
}
