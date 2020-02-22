import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: "Organization",
    icon: "fa fa-briefcase",
    children: [
      {
        name: "Organization",
        url: "/organization/orglist",
        icon: "icon-puzzle"
      },
      {
        name: "Organization Config",
        url: "/organization/orgconfig",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Personnel",
    icon: "fa fa-users",
    children: [
      {
        name: "Employee",
        url: "/employee/employeelist",
        icon: "icon-puzzle"
      },
      {
        name: "Promote",
        url: "/employee/promotelist",
        icon: "icon-puzzle"
      },
      {
        name: "Resign",
        url: "/employee/resignlist",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Payroll",
    icon: "icon-pencil",
    children: [
      {
        name: "Payroll Period",
        url: "/payroll/period",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Setting Data",
    icon: "icon-pencil",
    children: [
      {
        name: "Employee Group",
        url: "/setup/employeegrouplist",
        icon: "icon-puzzle"
      },
      {
        name: "Employee Level",
        url: "/setup/employeelevellist",
        icon: "icon-puzzle"
      },
      {
        name: "Department",
        url: "/setup/departmentlist",
        icon: "icon-puzzle"
      },
      {
        name: "Position",
        url: "/setup/positionlist",
        icon: "icon-puzzle"
      },
      {
        name: "Bank",
        url: "/setup/banklist",
        icon: "icon-puzzle"
      },
      {
        name: "Fund",
        url: "/setup/fundlist",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Disabled",
    url: "/dashboard",
    icon: "icon-ban",
    badge: {
      variant: "secondary",
      text: "NEW"
    },
    attributes: { disabled: true }
  }
];
