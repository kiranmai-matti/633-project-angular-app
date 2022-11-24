import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatMenuTrigger} from "@angular/material/menu";

import {DataService} from "../../services/data.service";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  firstName: string = "";
  lastName: string = "";
  count: number = 0;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCartProductsCount().subscribe(c => {
      this.count = c;
    });
    this.dataService.getCustomer().subscribe((cust: Customer) => {
      if (cust && cust.firstName && cust.lastName) {
        this.firstName = cust.firstName;
        this.lastName = cust.lastName;
        this.isLoggedIn = true;
      }
    })
  }

  logout(): void {
    if (this.trigger) {
      this.trigger.closeMenu();
    }
    this.dataService.setCustomer(undefined);
    this.router.navigate(['/home']);
    this.firstName = '';
    this.isLoggedIn = false;
  }

  myAccount(): void {
    this.router.navigate(['/account']);
  }
}
