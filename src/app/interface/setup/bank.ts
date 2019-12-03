export interface Bank {
  id: number;
  bankCode: string;
  bankNameTh: string;
  bankNameEn: string;
  bankShortName: string;
  remark?: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
