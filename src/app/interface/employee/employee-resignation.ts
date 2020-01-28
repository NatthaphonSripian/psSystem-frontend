export interface EmployeeResignation {
  id: number;
  resignationNo: string;
  resignationDate: Date;
  effectDate: Date;
  resignationType: string;
  detail: string;
  isCalculateLastPayment: string;
  calculateLastPaymentType: string;
  resignEffectDate: Date;
  isCalculateSalary: string;
  isCalculateLastOccasionalIncomeDeduct: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
