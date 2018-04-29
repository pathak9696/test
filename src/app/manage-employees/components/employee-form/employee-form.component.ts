import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  exists = false;
  FirstName;
  LastName;
  Phone;
  @Input() employee: Employee;
  @Input() departments: Department[];
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.employee && this.employee.id) {
      this.exists = true;
      // this.form.patchValue(this.employee);
    }
  }
}
