export interface IGuarantee {
  id: number;
  guaranteeNo: string;
  guaranteeDate: Date;
  guaranteeStartDate: Date;
  guaranteeEndDate: Date;
  guaranteeType: string;
  financialAmount: number;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
