import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFund } from '../../../interface/setup/fund-interface';
import { FundService } from './../../../service/fund.service';

@Component({
  selector: "app-fund",
  templateUrl: "./fund.component.html",
  styleUrls: ["./fund.component.scss"]
})
export class FundComponent implements OnInit {
  fund = { id: null } as IFund;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _fundService: FundService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.getFundById(id);
    }
  }

  getFundById(id: number) {
    this._fundService.getFundById(id).subscribe(data => {
      Object.assign(this.fund, data);
    });
  }

  onSave() {
    this._fundService.saveFund(this.fund).subscribe(data => {
      Object.assign(this.fund, data);
    });
  }
}
