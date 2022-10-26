import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import {DataService} from "../../services/data.service";
import {tap} from "rxjs";
import {Product} from "../../models/product";
import {Customer} from "../../models/customer";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  firstName:string ="Test User";
  lastName:string ="Test User";
  count: number = 0;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCartProductsCount().subscribe(c => {
      this.count = c;
    });
    this.dataService.getCustomer().subscribe((cust: Customer) => {
      if(cust && cust.firstName) {
        this.firstName = cust.firstName;
        this.lastName=cust.lastName;
        this.isLoggedIn = true;
      }
    })
  }

  logout(event: any) {
    if(this.trigger) {
      this.trigger.closeMenu();
    }
    this.dataService.setCustomer(undefined);
    this.router.navigate(['/home']);
    this.firstName = '';
    this.isLoggedIn = false;
  }

  myaccount($event: any) {

  }
}
