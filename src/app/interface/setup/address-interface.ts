export interface IAddress {
  id: number;
  addressType: string;
  addressName: string;
  addressNo: string;
  groupNo: string;
  building: string;
  roomNo: string;
  floorNo: string;
  village: string;
  lane: string;
  street: string;
  district: string;
  amphur: string;
  province: string;
  postalCode: string;
  country: string;
  contactName: string;
  mobilePhone: string;
  phone1: string;
  phone2: string;
  phone3: string;
  fax: string;
  email1: string;
  email2: string;
  Remark: string;
  createdBy?: string;
  createdDate?: Date;
  editBy?: string;
  editDate?: Date;
}
