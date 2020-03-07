import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAddress, IEmployee, IEmployeeGroup, IEmployeeLevel, IFilter } from 'src/app/interface';
import { EmployeeService } from 'src/app/service/employee.service';

import { EMPLOYEE } from '../../../shared/constant/common.constant';
import { EmployeeGroupService } from './../../../service/employee-group.service';
import { EmployeeLevelService } from './../../../service/employee-level.service';

/** Todo: 
    1. Fix validate input
    2. Add global error handler
    3. Fix toast
    4. Add default sort
 */

@Component({
  selector: "app-employeeinfo",
  templateUrl: "./employeeinfo.component.html",
  styleUrls: ["./employeeinfo.component.scss"]
})
export class EmployeeinfoComponent implements OnInit {
  currentTitle: string;
  titleOptions = EMPLOYEE.TITLE_OPTIONS as IFilter[];
  genderList = EMPLOYEE.GENDER_OPTIONS as IFilter[];
  martialStatus = EMPLOYEE.MARTIAL_STATUS as IFilter[];
  militaryStatus = EMPLOYEE.MILLITARY_STATUS as IFilter[];

  currentGroup = EMPLOYEE.DEFAULT_GROUP;
  currentLevel = EMPLOYEE.DEFUATL_LEVEL;
  employeeGroups: IEmployeeGroup[] = [];
  employeeGropLevels: IEmployeeLevel[] = [];

  employee = {
    id: null,
    addresses: { id: null } as IAddress
  } as IEmployee;

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
    this.groupService.getEmployeeGroups().subscribe((res: IEmployeeGroup[]) => {
      this.employeeGroups = res;
    });
  }

  getEmployeeLevels() {
    this.levelService.getEmployeeLevels().subscribe((res: IEmployeeLevel[]) => {
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
    this.serviceEmployee.employeeSave(this.employee).subscribe(async data => {
      await Promise.all([this.setDisplayData(data)]);
    });
  }

  private prepareData() {
    this.employee.gender = this.genderList
      .filter(gender => gender.isSelected)
      .map(g => g.value)[0];

    this.employee.marry = this.martialStatus
      .filter(m => m.isSelected)
      .map(m => m.value)[0];

    this.employee.military = this.militaryStatus
      .filter(m => m.isSelected)
      .map(m => m.value)[0];
  }

  onSelectFilter(key: string, filter: any) {
    switch (key) {
      case EMPLOYEE.KEY_TITLE:
        this.currentTitle = filter.value;
        this.employee.titleName = filter.value;
        break;
      case EMPLOYEE.KEY_GENDER:
        this.genderList = this.mapFilter(this.genderList, filter.value);
        break;
      case EMPLOYEE.KEY_MARTIAL:
        this.martialStatus = this.mapFilter(this.martialStatus, filter.value);
        break;
      case EMPLOYEE.KEY_MILITARY:
        this.militaryStatus = this.mapFilter(this.militaryStatus, filter.value);
        break;
      case EMPLOYEE.KEY_GROUP:
        this.employee.employeeGroup = filter;
        this.currentGroup = filter.employeeGroupNameEn;
        break;
      case EMPLOYEE.KEY_LEVEL:
        this.employee.employeeLevel = filter;
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

  // validateNumber(value: number) {
  //   if (isNaN(value)) value = 0;
  //   // const valid = value >= 0 && value < 999;
  //   if (value > 999) value = 999;
  //   return value;
  // }
}
