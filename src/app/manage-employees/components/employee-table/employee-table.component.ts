import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  getDepartment(departments: Department[]) {
    return departments.reduce(
      (str: string, d: Department, i: number): string => {
        if (i > 0) {
          str += ', ';
        }
        str += d.name;
        return str;
      },
      ''
    );
  }

  editEmployee($e, id): void {
    this.edit.emit(id);
  }

  deleteEmployee($e, emp): void {
    this.remove.emit(emp);
  }
}
