export interface IExperience {
  id: number;
  listNo: number;
  organizationName: string;
  businessType: string;
  position: string;
  workCategory: string;
  startDate: Date;
  endDate: Date;
  newlyRateOfSalary: number;
  reasonQuit: string;
  description: string;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
