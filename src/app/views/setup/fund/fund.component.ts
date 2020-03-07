import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IFund } from '../../../interface/setup/fund-interface';
import { FundService } from './../../../service/fund.service';

@Component({
  selector: "app-fund",
  templateUrl: "./fund.component.html",
  styleUrls: ["./fund.component.scss"]
})
export class FundComponent implements OnInit {
  public fund: IFund;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servieFund: FundService
  ) {
    this.fund = { id: null } as IFund;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataFund(this.id);
    }
  }

  onLoadDataFund(id: number) {
    this.servieFund.fundGetById(this.id).subscribe(
      data => {
        this.fund = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    console.log(this.fund);
    this.servieFund.fundSave(this.fund).subscribe(data => {
      this.fund = data;
    });
  }
}
