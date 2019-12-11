export interface EmployeeLevel {
  id: number;
  employeeLevelCode: string;
  employeeLevelNameTh: string;
  employeeLevelNameEn: string;
  remark?: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
