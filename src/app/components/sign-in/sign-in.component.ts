import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    return this.httpClient.post("http://localhost:8080/api/customers/login", {
      header: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('email', "bestbuy@gmail.com").set("password", "1234")
    }).pipe().subscribe((data) => {
      console.log(data);
      
    })
    //   this.httpClient.get("http://localhost:8080/api/categories").pipe().subscribe((data) => {
    //   console.log(data);
      
    // })

  }
}
