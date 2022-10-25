import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {Customer} from "../../models/customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formGroup!: FormGroup;

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
    });
  }

  constructor(private httpClient:HttpClient, private formBuilder: FormBuilder, private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

   // @ts-ignore
  getError(el: string) {
    switch (el) {
      case 'username':
        // @ts-ignore
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        } else if(this.formGroup.get('username')?.hasError('email')) {
          return 'Invalid email';
        }
        break;
      case 'password':
        // @ts-ignore
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }
  login() {
    return this.httpClient.post<Customer>("http://localhost:8080/api/customers/login",
      {'email': this.formGroup.get('username')?.value,'password': this.formGroup.get('password')?.value}
    ).pipe().subscribe((data:Customer) => {
     if(data) {
       this.dataService.setCustomer(data);
       this.router.navigate(['/home']);
     }
    }, error => {
      alert('Invalid Credentials.. Please enter the proper Credentials or signup');
    });
  }
}
