import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankService } from '../../../service/bank.service';
import { IBank } from './../../../interface';

@Component({
  selector: "app-banklist",
  templateUrl: "./banklist.component.html",
  styleUrls: ["./banklist.component.scss"]
})
export class BanklistComponent implements OnInit {
  public bankList: IBank[] = [];
  public bankListFiltered: IBank[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _bankService: BankService
  ) {}

  ngOnInit() {
    this.getBankList();
  }

  getBankList() {
    this._bankService.getBankList().subscribe((res: IBank[]) => {
      this.bankList = res;
      this.bankListFiltered = this.bankList;
    });
  }

  updateBank(id: number) {
    this._router.navigate(["setup/bank", id]);
  }

  deleteBank(id: number) {
    this._bankService.deleteBank(id).subscribe(() => {
      this.getBankList();
    });
  }
}
