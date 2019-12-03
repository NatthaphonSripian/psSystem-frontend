import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Bank } from './../../../interface/setup/bank';
import { BankService } from './../../../service/bank.service';

@Component({
  selector: "app-bank",
  templateUrl: "./bank.component.html",
  styleUrls: ["./bank.component.scss"]
})
export class BankComponent implements OnInit {
  public bank: Bank;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servieBank: BankService
  ) {
    this.bank = { id: null } as Bank;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      this.onLoadDataBank(this.id);
    }
  }

  onLoadDataBank(id: number) {
    this.servieBank.bankGetById(this.id).subscribe(
      data => {
        this.bank = data;
      },
      error => console.log(error)
    );
  }

  onSave() {
    this.servieBank.bankSave(this.bank).subscribe(data => {
      this.bank = data;
    });
  }
}
