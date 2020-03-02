const BASE_URL = `http://35.240.136.80:8082`;
// const BASE_URL = `http://localhost:8082`;

export const API_URL = {
  // Bank
  BANK_GET_ALL: `${BASE_URL}/api/bank/all`,
  BANK_GET_BY_ID: `${BASE_URL}/api/bank/`,
  BANK_SAVE: `${BASE_URL}/api/bank/save`,
  BANK_DELETE: `${BASE_URL}/api/bank/delete/`,

  // Fund
  FUND_GET_ALL: `${BASE_URL}/api/fund/all`,
  FUND_GET_BY_ID: `${BASE_URL}/api/fund/`,
  FUND_SAVE: `${BASE_URL}/api/fund/save`,
  FUND_DELETE: `${BASE_URL}/api/fund/delete/`,

  // Department
  DEPARTMENT_GET_ALL: `${BASE_URL}/api/department/all`,
  DEPARTMENT_GET_BY_ID: `${BASE_URL}/api/department/`,
  DEPARTMENT_SAVE: `${BASE_URL}/api/department/save`,
  DEPARTMENT_DELETE: `${BASE_URL}/api/department/delete/`,

  // Position
  POSITION_GET_ALL: `${BASE_URL}/api/position/all`,
  POSITION_GET_BY_ID: `${BASE_URL}/api/position/`,
  POSITION_SAVE: `${BASE_URL}/api/position/save`,
  POSITION_DELETE: `${BASE_URL}/api/position/delete/`,

  // Employee Group
  EMPLOYEE_GROUP_GET_ALL: `${BASE_URL}/api/employee/group/all`,
  EMPLOYEE_GROUP_GET_BY_ID: `${BASE_URL}/api/employee/group/`,
  EMPLOYEE_GROUP_SAVE: `${BASE_URL}/api/employee/group/save`,
  EMPLOYEE_GROUP_DELETE: `${BASE_URL}/api/employee/group/delete/`,

  // Employee Group
  EMPLOYEE_LEVEL_GET_ALL: `${BASE_URL}/api/employee/level/all`,
  EMPLOYEE_LEVEL_GET_BY_ID: `${BASE_URL}/api/employee/level/`,
  EMPLOYEE_LEVEL_SAVE: `${BASE_URL}/api/employee/level/save`,
  EMPLOYEE_LEVEL_DELETE: `${BASE_URL}/api/employee/level/delete/`,

  // Organization
  ORGANIZATION_GET_ALL: `${BASE_URL}/api/organization/all`,
  ORGANIZATION_GET_BY_ID: `${BASE_URL}/api/organization/`,
  ORGANIZATION_SAVE: `${BASE_URL}/api/organization/save`,
  ORGANIZATION_DELETE: `${BASE_URL}/api/organization/delete/`,

  // Employee
  EMPLOYEE_GET_ALL: `${BASE_URL}/api/employee/all`,
  EMPLOYEE_GET_BY_ID: `${BASE_URL}/api/employee/`,
  EMPLOYEE_SAVE: `${BASE_URL}/api/employee/save`,
  EMPLOYEE_DELETE: `${BASE_URL}/api/employee/delete/`
};
