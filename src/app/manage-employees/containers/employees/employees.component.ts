import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      console.log('data:::::', data);
    });
  }

  edit($e): void {
    console.log('edit from container', $e);
  }

  delete($e): void {
    const canDelete = window.confirm(
      'Are you sure you want to delete this Employee from the list? This cannot be undone.'
    );
    if (canDelete) {
      this.employeeService.deleteEmployee($e);
    }
  }
}
