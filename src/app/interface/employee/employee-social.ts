export interface EmployeeSocial {
  id: number;
  isSocialReduce: string;
  socialNo: string;
  registerDate: Date;
  clinic: string;
  isBeforeSocial: string;
  beforeOrganizationName: string;
  beginSocial: number;
  beginIncome: number;
  beginTax: number;
  beginSavingFund: number;
  workerReduce: number;
  employerReduce: number;
  accumulateIncome: number;
  accumulateSocial: number;
  accumulateFunds: number;
  accumulateTax: number;
  reduceType: string;
  paymentPercent: number;
}
