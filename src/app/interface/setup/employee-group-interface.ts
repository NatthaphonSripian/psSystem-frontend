export interface IEmployeeGroup {
  id: number;
  employeeGroupCode: string;
  employeeGroupNameTh: string;
  employeeGroupNameEn: string;
  remark?: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
