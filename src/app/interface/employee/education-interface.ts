export interface IEducation {
  id: string;
  education: string;
  institution: string;
  qualification: string;
  branch: string;
  yearEnd: Date;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
