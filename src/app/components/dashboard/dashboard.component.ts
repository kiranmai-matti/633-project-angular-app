import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() set prd(prod: Product[]) {
    if(prod) {
     this.products = [...prod];
    }
  }
  products: Product[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    let categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    console.log(categoryId);
    if(categoryId !== null) {
      this.dataService.getProductsByCategory(+categoryId).subscribe((products: Product[]) => {
        if(products && products.length) {
          this.products = products;
          this.dataService.setProducts(products);
        }
      });
    }

  }

  onProductClicked(prdId: number) {
    this.router.navigate(['/product', prdId]);
  }

  onAddToCartClicked(productId: number) {
    this.dataService.setCartProduct(this.products.filter(p => p.prdId === productId)[0]);
  }
}
