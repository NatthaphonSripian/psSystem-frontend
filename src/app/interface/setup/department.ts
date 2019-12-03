export interface Department {
  id?: number;
  departmentCode?: string;
  departmentNameTh?: string;
  departmentNameEn?: string;
  parentDepartment?: Department;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
