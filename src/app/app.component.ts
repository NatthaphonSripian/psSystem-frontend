import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: "body",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
  constructor(private routes: Router) {}

  ngOnInit() {
   
  }
}
