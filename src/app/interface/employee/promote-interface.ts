export interface IPromote {
  id: number;
  promoteNo: string;
  promoteDate: Date;
  effectDate: Date;
  Remark: string;
  isEmployeeTypePromote: string;
  fromEmployeeType: string;
  employeeType: string;
  isSalaryPromote: string;
  beforeWageRate: number;
  adjustAmount: number;
  adjustPercentRate: number;
  afterAdjustAmount: number;
  isOrganizationPromote: string;
  isDepartmentPromote: boolean;
  isPositionPromote: boolean;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
