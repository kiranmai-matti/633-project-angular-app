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
  products: Product[] = [/*{
    prdId:902,
    prdPrice:6495282,
    prdName: 'Apple Watch Series 8 GPS + Cellular 45mm Graphite Stainless Steel Case with Graphite Milanese Loop - Graphite',
    prdImgUrl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495282_sd.jpg',
    prdDesc:'Apple Watch Series 8 features advanced health sensors and apps, so you can take an ECG¹, measure heart rate¹ and blood oxygen², and track temperature changes³ for advanced insights into your menstrual cycle⁴. And with Crash Detection, sleep stages tracking, and advanced workout metrics, it helps you stay active, healthy, safe, and connected. See Dimension section below for band sizing information',
    prdCode:790,
    categoryId: 205
  },
    {
      prdId:902,
      prdPrice:6495282,
      prdName: 'Apple Watch Series 8 GPS + Cellular 45mm Graphite Stainless Steel Case with Graphite Milanese Loop - Graphite',
      prdImgUrl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495282_sd.jpg',
      prdDesc:'Apple Watch Series 8 features advanced health sensors and apps, so you can take an ECG¹, measure heart rate¹ and blood oxygen², and track temperature changes³ for advanced insights into your menstrual cycle⁴. And with Crash Detection, sleep stages tracking, and advanced workout metrics, it helps you stay active, healthy, safe, and connected. See Dimension section below for band sizing information',
      prdCode:790,
      categoryId: 205
    },
    {
      prdId:902,
      prdPrice:6495282,
      prdName: 'Apple Watch Series 8 GPS + Cellular 45mm Graphite Stainless Steel Case with Graphite Milanese Loop - Graphite',
      prdImgUrl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495282_sd.jpg',
      prdDesc:'Apple Watch Series 8 features advanced health sensors and apps, so you can take an ECG¹, measure heart rate¹ and blood oxygen², and track temperature changes³ for advanced insights into your menstrual cycle⁴. And with Crash Detection, sleep stages tracking, and advanced workout metrics, it helps you stay active, healthy, safe, and connected. See Dimension section below for band sizing information',
      prdCode:790,
      categoryId: 205
    }*/];

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
