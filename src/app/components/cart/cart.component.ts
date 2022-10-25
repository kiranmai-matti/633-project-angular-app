import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[]= [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.dataService.getCartProducts().subscribe((products: Product[]) => {
    this.products = products;
  });
  }

}
