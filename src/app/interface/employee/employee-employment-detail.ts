export interface EmployeeEmploymentDetail {
  id: number;
  listNo: number;
  incomeDeductAmount: number;
  incomeDeductType: string;
  paymentType: string;
  startDate: Date;
  endDate: Date;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
