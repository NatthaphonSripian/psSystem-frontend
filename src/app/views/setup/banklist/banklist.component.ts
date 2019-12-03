import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankService } from '../../../service/bank.service';
import { Bank } from './../../../interface';

@Component({
  selector: "app-banklist",
  templateUrl: "./banklist.component.html",
  styleUrls: ["./banklist.component.scss"]
})
export class BanklistComponent implements OnInit {
  public bankListData: Bank[] = [];
  public bankListFiltered: Bank[] = [];

  constructor(private serviceBank: BankService, private router: Router) {}

  ngOnInit() {
    this.reloadDataBank();
  }

  reloadDataBank() {
    this.serviceBank.bankGetAll().subscribe((res: Bank[]) => {
      this.bankListData = res;

      if (this.bankListData.length > 0) {
        this.bankListFiltered = this.bankListData;
      } else {
        this.bankListFiltered = [];
      }
    });
  }

  updateBank(id: number) {
    this.router.navigate(["setup/bank", id]);
  }

  deleteBank(id: number) {
    // Delete Data and reload data
    this.serviceBank.bankDeleteById(id).subscribe(() => {
      this.reloadDataBank();
    });
  }
}