import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAddress, IEmployee, IEmployeeGroup, IEmployeeLevel, IFilter } from 'src/app/interface';
import { IEmployment } from 'src/app/interface/employee/employment-interface';
import { EmployeeService } from 'src/app/service/employee.service';

import { EMPLOYEE } from '../../../shared/constant/common.constant';
import { EmployeeGroupService } from './../../../service/employee-group.service';
import { EmployeeLevelService } from './../../../service/employee-level.service';

/** Todo: 
    1. Add default sort
 */

@Component({
  selector: "app-employeeinfo",
  templateUrl: "./employeeinfo.component.html",
  styleUrls: ["./employeeinfo.component.scss"]
})
export class EmployeeinfoComponent implements OnInit {
  currentTitle: string;
  address = {} as IAddress;
  employment = {} as IEmployment;
  currentGroup = EMPLOYEE.DEFAULT_GROUP;
  currentLevel = EMPLOYEE.DEFUATL_LEVEL;
  employeeGroups: IEmployeeGroup[] = [];
  employeeGropLevels: IEmployeeLevel[] = [];

  employee = {
    id: null,
    addresses: { id: null } as IAddress
  } as IEmployee;

  //set default filters
  titleOptions = EMPLOYEE.TITLE_OPTIONS as IFilter[];
  genderList = EMPLOYEE.GENDER_OPTIONS as IFilter[];
  martialStatus = EMPLOYEE.MARTIAL_STATUS as IFilter[];
  militaryStatus = EMPLOYEE.MILLITARY_STATUS as IFilter[];
  incomeTypes = EMPLOYEE.INCOME_TYPES as IFilter[];
  spouseAllowances = EMPLOYEE.SPOUSE_ALLOWANCE as IFilter[];
  taxFillingTypes = EMPLOYEE.TAX_FILLING_TYPES;

  constructor(
    private route: ActivatedRoute,
    private serviceEmployee: EmployeeService,
    private groupService: EmployeeGroupService,
    private levelService: EmployeeLevelService
  ) {}

  ngOnInit() {
    this.getDefaultData();

    const id = this.route.snapshot.params["id"];
    if (id) {
      this.getEmployeeById(id);
    }
  }

  private getDefaultData() {
    const employee = this.employee;
    this.currentTitle = this.getCurrentTitle(employee);
    this.getEmployeeGroups();
    this.getEmployeeLevels();
  }

  private getCurrentTitle(employee) {
    return employee.titleName ? employee.titleName : this.titleOptions[0].value;
  }

  getEmployeeGroups() {
    this.groupService.getEmployeeGroupList().subscribe((res: IEmployeeGroup[]) => {
      this.employeeGroups = res;
    });
  }

  getEmployeeLevels() {
    this.levelService.getEmployeeLevelList().subscribe((res: IEmployeeLevel[]) => {
      this.employeeGropLevels = res;
    });
  }

  getEmployeeById(id: number) {
    this.serviceEmployee.getEmployeeById(id).subscribe(
      async (data: IEmployee) => {
        await Promise.all([this.setDisplayData(data)]);
      },
      error => console.log(error)
    );
  }

  private setDisplayData(data: IEmployee) {
    return new Promise(resolve => {
      Object.assign(this.employee, data);

      Object.assign(this.address, data.addresses);

      // Object.assign(this.employment, data.employeeEmployments);
      const employment = this.employment;
      employment.employeeGroup = data.employeeGroup;
      employment.employeeLevel = data.employeeLevel;

      this.currentTitle = this.getCurrentTitle(data);
      this.currentGroup = data.employeeGroup.employeeGroupNameEn;
      this.currentLevel = data.employeeLevel.employeeLevelNameEn;
      this.genderList = this.mapFilter(this.genderList, data.gender);
      this.martialStatus = this.mapFilter(this.martialStatus, data.marry);
      this.militaryStatus = this.mapFilter(this.militaryStatus, data.military);
      resolve();
    });
  }

  onSave() {
    this.prepareData();
    console.log(this.employee);
    this.serviceEmployee.saveEmployee(this.employee).subscribe(async data => {
      await Promise.all([this.setDisplayData(data)]);
    });
  }

  private prepareData() {
    const employee = this.employee;
    employee.titleName = this.currentTitle;
    employee.gender = this.genderList
      .filter(gender => gender.isSelected)
      .map(g => g.value)[0];

    employee.marry = this.martialStatus
      .filter(m => m.isSelected)
      .map(m => m.value)[0];

    employee.military = this.militaryStatus
      .filter(m => m.isSelected)
      .map(m => m.value)[0];

    employee.employeeEmployment = this.employment;
    employee.employeeGroup = this.employment.employeeGroup;
    employee.employeeLevel = this.employee.employeeLevel;

    employee.addresses = this.address;
  }

  onSelectFilter(key: string, filter: any) {
    switch (key) {
      case EMPLOYEE.KEY_TITLE:
        this.currentTitle = filter.value;
        this.employee.titleName = filter.value;
        break;
      case EMPLOYEE.GENDER:
        this.genderList = this.mapFilter(this.genderList, filter.value);
        break;
      case EMPLOYEE.MARTIAL:
        this.martialStatus = this.mapFilter(this.martialStatus, filter.value);
        break;
      case EMPLOYEE.MILITARY:
        this.militaryStatus = this.mapFilter(this.militaryStatus, filter.value);
        break;
      case EMPLOYEE.GROUP:
        this.employment.employeeGroup = filter;
        // this.employee.employeeGroup = filter;
        this.currentGroup = filter.employeeGroupNameEn;
        break;
      case EMPLOYEE.LEVEL:
        this.employment.employeeLevel = filter;
        // this.employee.employeeLevel = filter;
        this.currentLevel = filter.employeeLevelNameEn;
        break;
      default:
        break;
    }
  }

  private mapFilter(filterList: IFilter[], target: string) {
    return filterList.map(filter => {
      filter.isSelected = filter.value === target;
      return filter;
    });
  }

  validateNumber(id: any, value: any) {
    const isSalary = id === "salary-input";
    if (!isSalary && (isNaN(value) || value === null || value < 0)) value = 0;
    if (!isSalary && value > 999) value = 999;

    const input = document.getElementById(id) as HTMLInputElement;
    if (id === "weight-input") {
      input.value = value.toString();
      this.employee.weight = value;
    } else if (id === "height-input") {
      input.value = value.toString();
      this.employee.height = value;
    } else {
      this.employment.salary = value;
    }
  }
}
