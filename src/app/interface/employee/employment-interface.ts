import { IEmployeeGroup, IEmployeeLevel } from '..';
import { IDepartment } from '../setup/department-interface';
import { IPosition } from '../setup/position-interface';

export interface IEmployment {
  id: number;
  startDate: Date;
  endDate: Date;
  employeeGroup: IEmployeeGroup;
  employeeLevel: IEmployeeLevel;
  position: IPosition;
  department: IDepartment;
  employeeType: string;
  salary: number;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
