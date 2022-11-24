import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('prdId');
    if(productId !==null) {
      this.product = this.dataService.getProductByProductId(+productId);
      console.log(this.product);
    }
  }

  onProductClicked(prdId: any) {

  }

  onAddToCartClicked() {
    if(this.product) {
      this.dataService.setCartProduct(this.product);
    }
  }
}
