import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmployeesService {
  employees: Employee[];

  createEmployee(payload: Employee): void {
    EMPLOYEES.push(payload);
  }

  updateEmployee(payload: Employee): void {
    const employeeIndex: number = EMPLOYEES.findIndex(i => i.id === payload.id);
    EMPLOYEES[employeeIndex] = payload;
  }

  getEmployees(): Observable<Employee[]> {
    const subject = new Subject<Employee[]>();
    setTimeout(() => {
      subject.next(EMPLOYEES);
      subject.complete();
    }, 200);
    return subject;
  }

  deleteEmployee(payload: Employee): void {
    const index = EMPLOYEES.findIndex(i => i.id === payload.id);
    EMPLOYEES.splice(index, 1);
  }

  searchEmployees(payload: Employee): void {}
}

const EMPLOYEES: Employee[] = [
  {
    id: 1,
    fname: 'Foo',
    lname: 'Bar',
    department: [{ id: 1, name: 'plumbing' }, { id: 3, name: 'Sales' }],
    phone: '0410123456'
  },
  {
    id: 4,
    fname: 'Lorem',
    lname: 'Ipsum',
    department: [{ id: 1, name: 'IT' }],
    phone: '0410123456'
  }
];
