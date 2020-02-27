import { EmployeeGroup } from '../setup/employee-group';
import { EmployeeLevel } from '../setup/employee-level';
import { Address } from './../setup/address';
import { EmployeeContract } from './employee-contract';
import { EmployeeEducation } from './employee-education';
import { EmployeeEmployment } from './employee-employment';
import { EmployeeExperience } from './employee-experience';
import { EmployeeFund } from './employee-fund';
import { EmployeeGuarantee } from './employee-guarantee';
import { EmployeeReduceTax } from './employee-reduce-tax';
import { EmployeeSocial } from './employee-social';

export interface Employee {
  id: number;
  employeeCode: string;
  titleName: string;
  firstName: string;
  lastName: string;
  gender: string;
  weight: number;
  height: number;
  nationalism: string;
  nationality: string;
  religion: string;
  birthDate: Date;
  marry: string;
  military: string;
  idCard: string;
  createdBy: string;
  createdDate: Date;
  editBy: string;
  editDate: Date;
  addresses: Address;
  employeeEducations?: EmployeeEducation[];
  employeeContracts?: EmployeeContract[];
  employeeExperiences?: EmployeeExperience[];
  employeeFunds?: EmployeeFund[];
  employeeGuarantees?: EmployeeGuarantee[];
  employeeEmployments?: EmployeeEmployment[];
  employeeReduceTax?: EmployeeReduceTax;
  employeeSocial?: EmployeeSocial;
  employeeGroup: EmployeeGroup;
  employeeLevel: EmployeeLevel;
}
