import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBank } from '../../../interface/setup/bank-interface';
import { BankService } from './../../../service/bank.service';

@Component({
  selector: "app-bank",
  templateUrl: "./bank.component.html",
  styleUrls: ["./bank.component.scss"]
})
export class BankComponent implements OnInit {
  bank = { id: null } as IBank;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _bankService: BankService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    if (id) {
      this.getBankById(id);
    }
  }

  getBankById(id: number) {
    this._bankService.getBankById(id).subscribe(data => {
      Object.assign(this.bank, data);
    });
  }

  onSave() {
    this._bankService.saveBank(this.bank).subscribe(data => {
      Object.assign(this.bank, data);
    });
  }
}
