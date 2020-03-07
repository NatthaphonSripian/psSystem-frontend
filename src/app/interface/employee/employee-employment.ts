import { IDepartment } from '../setup/department-interface';
import { IPosition } from '../setup/position-interface';

export interface EmployeeEmployment {
  id: number;
  startDate: Date;
  endDate: Date;
  employeeType: string;
  position: IPosition;
  department: IDepartment;
  salary: number;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
