import { Department } from './../setup/department';
import { Position } from './../setup/position';

export interface EmployeeEmployment {
  id: number;
  startDate: Date;
  endDate: Date;
  employeeType: string;
  position: Position;
  department: Department;
  salary: number;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
