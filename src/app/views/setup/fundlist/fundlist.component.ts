import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IFund } from '../../../interface/setup/fund-interface';
import { FundService } from './../../../service/fund.service';

@Component({
  selector: "app-fundlist",
  templateUrl: "./fundlist.component.html",
  styleUrls: ["./fundlist.component.scss"]
})
export class FundlistComponent implements OnInit {
  public fundListData: IFund[] = [];
  public fundListFiltered: IFund[] = [];

  constructor(private serviceFund: FundService, private router: Router) {}

  ngOnInit() {
    this.reloadDataFund();
  }

  reloadDataFund() {
    this.serviceFund.fundGetAll().subscribe((res: IFund[]) => {
      this.fundListData = res;

      if (this.fundListData.length > 0) {
        this.fundListFiltered = this.fundListData;
      } else {
        this.fundListFiltered = [];
      }
    });
  }

  updateFund(id: number) {
    this.router.navigate(["setup/fund", id]);
  }

  deleteFund(id: number) {
    // Delete Data and reload data
    this.serviceFund.fundDeleteById(id).subscribe(() => {
      this.reloadDataFund();
    });
  }
}
