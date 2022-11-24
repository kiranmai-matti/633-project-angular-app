import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

import {Product} from "../models/product";
import {Category} from "../models/category";
import {Customer} from "../models/customer";

const BASE_URL = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  currentCustomerSubject: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(<Customer>{});
  productsSubject: Subject<Product[]> = new Subject<Product[]>();
  cartProductsCountSubject: Subject<number> = new Subject<number>();
  categories: Category[] = [];
  products: Product[] = [];
  cartProducts: Product[] = [];
  customer!: Customer;

  constructor(private http: HttpClient) {
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(BASE_URL + `categories/${categoryId}/products`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(BASE_URL + `categories`);
  }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProductByProductId(prdId: number): Product | undefined {
    return this.products && this.products.find(p => p.prdId === prdId);
  }

  setCustomer(customer: Customer | any) {
    this.currentCustomerSubject.next(customer);
  }

  getCustomer():Observable<Customer> {
    return this.currentCustomerSubject.asObservable();
  }

  setProducts(products: Product[]) {
    this.products = [...products];
    this.productsSubject.next(this.products);
  }

  getCartProductsCount(): Observable<number> {
    return this.cartProductsCountSubject.asObservable();
  }

  getCartProducts(): Observable<Product[]> {
    return this.cartProductsSubject.asObservable();
  }

  setCartProduct(product: Product) {
    this.cartProducts.push(product);
    this.cartProductsCountSubject.next(this.cartProducts.length);
    this.cartProductsSubject.next(this.cartProducts);
  }
}
