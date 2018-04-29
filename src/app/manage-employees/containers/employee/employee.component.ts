import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments: Department[];
  employee: Employee;
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

  addEmployee($e): void {
    console.log('addEmployee', $e);
  }

  removeEmployee($e): void {
    console.log('removeEmployee', $e);
  }

  updateEmployee($e): void {
    console.log('updateEmployee', $e);
  }
}
