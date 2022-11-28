import {Component, OnInit} from '@angular/core';

import {DataService} from "../../services/data.service";
import {Customer} from "../../models/customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  customer!: Customer;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getCustomer().pipe().subscribe((cust: Customer) => {
      if(cust && cust.email) {
        this.customer = cust;
      } else {
        window.alert('Error while getting Customer Account Details, You will be redirected to home');
        this.router.navigate(['/home']);
      }
    })
  }
}
