export interface IFund {
  id: number;
  fundStartDate: Date;
  fundEndDate: Date;
  accountMemberCode: string;
  provEmployerDeduct: number;
  provEmployeeDeduct: number;
  provBankNo: string;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
