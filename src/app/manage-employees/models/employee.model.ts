import { Department } from './department.model';

export interface Employee {
  id: number;
  fname: string;
  lname: string;
  department: Department[];
  phone: string;
}
