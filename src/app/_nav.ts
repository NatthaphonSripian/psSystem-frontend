import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: "Dashboard",
  //   url: "/dashboard",
  //   icon: "icon-speedometer",
  //   badge: {
  //     variant: "info",
  //     text: "NEW"
  //   }
  // },
  {
    name: "Organization",
    icon: "fa fa-briefcase",
    children: [
      {
        name: "Organization",
        url: "/organization/orginfo",
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
        url: "/personnel/employee",
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
        name: "Department",
        url: "/setup/departmentlist",
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
