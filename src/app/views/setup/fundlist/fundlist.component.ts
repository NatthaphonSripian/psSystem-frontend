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
  public fundList: IFund[] = [];
  public fundListFiltered: IFund[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _fundService: FundService
  ) {}

  ngOnInit() {
    this.getFundList();
  }

  getFundList() {
    this._fundService.getFundList().subscribe((res: IFund[]) => {
      this.fundList = res;
      this.fundListFiltered = this.fundList;
    });
  }

  updateFund(id: number) {
    this._router.navigate(["setup/fund", id]);
  }

  deleteFund(id: number) {
    this._fundService.deleteFund(id).subscribe(() => {
      this.getFundList();
    });
  }
}
