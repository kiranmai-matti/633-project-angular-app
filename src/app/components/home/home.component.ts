import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Category} from "../../models/category";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  categories: Category[] = [];
  constructor(private http: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().pipe().subscribe((data: Category[]) => {
      this.categories = data.map(cat => {
        cat.imageSrc =  `./assets/Category_${cat.categoryId}.jpg`;
        return cat;
      });
  });
  }

  onCategoryClicked(categoryId:number) {
    this.router.navigate(['/dashboard', categoryId]);
  }
}

