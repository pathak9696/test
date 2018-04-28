import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Department } from '../../models/department.model';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  FirstName;
  LastName;
  @Input() Departments: Department[];
  Phone;

  constructor() {}

  ngOnInit() {}
}
