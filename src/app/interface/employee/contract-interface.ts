export interface IContract {
  id: string;
  contractNo: string;
  contractDate: Date;
  contractStartDate: Date;
  contractEndDate: Date;
  makeContractAt: string;
  contractType: string;
  wageRate: number;
  remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
