import { IAddress } from '../setup/address-interface';
import { IEmployeeGroup } from '../setup/employee-group-interface';
import { IEmployeeLevel } from '../setup/employee-level-interface';
import { IContract } from './contract-interface';
import { IEducation } from './education-interface';
import { EmployeeSocial } from './employee-social';
import { IEmployment } from './employment-interface';
import { IExperience } from './experience-inteface';
import { IFund } from './fund-interface';
import { IGuarantee } from './guarantee-interfce';
import { ITaxReduction } from './tax-reduction-interface';

export interface IEmployee {
  id: number;
  employeeCode: string;
  titleName: string;
  firstName: string;
  lastName: string;
  displayName: string;
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
  addresses: IAddress;
  employeeEmployment?: IEmployment;
  employeeEducations?: IEducation[];
  employeeContracts?: IContract[];
  employeeExperiences?: IExperience[];
  employeeFunds?: IFund[];
  employeeGuarantees?: IGuarantee[];
  // employeeEmployments?: IEmployment[];
  employeeReduceTax?: ITaxReduction;
  employeeSocial?: EmployeeSocial;
  //Move to Employment
  employeeGroup: IEmployeeGroup;
  employeeLevel: IEmployeeLevel;
}
