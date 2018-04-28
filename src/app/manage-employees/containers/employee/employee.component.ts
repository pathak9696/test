import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments: Department[];
  constructor() {}

  ngOnInit() {
    this.departments = [
      {
        id: 1,
        name: 'IT'
      },
      {
        id: 2,
        name: 'Sales'
      },
      {
        id: 3,
        name: 'Accounts'
      }
    ];
  }
}
