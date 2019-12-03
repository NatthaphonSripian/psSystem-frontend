const BASE_URL = `http://localhost:8082`;

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
  POSITION_DELETE: `${BASE_URL}/api/position/delete/`
};
