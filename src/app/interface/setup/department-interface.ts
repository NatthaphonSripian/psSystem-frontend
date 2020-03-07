export interface IDepartment {
  id?: number;
  departmentCode?: string;
  departmentNameTh?: string;
  departmentNameEn?: string;
  parentDepartment?: IDepartment;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
