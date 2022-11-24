import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../models/customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  private customer!: Customer;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'mobileNo': [0, Validators.required],
      'password': ['', Validators.required],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  // @ts-ignore
  getError(el: string) {
    switch (el) {
      case 'email':
        // @ts-ignore
        if (this.f['email'].hasError('required')) {
          return 'Email required';
        } else if(this.f['email'].hasError('email')) {
          return 'Invalid email';
        }
        break;
      case 'password':
        // @ts-ignore
        if (this.f['password'].hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  signup() {
    console.log("cust", this.signupForm.value)
    this.customer = this.signupForm.value
    console.log("cust", this.signupForm.value)
    this.http.post<number>('http://localhost:8080/api/customers/register',
      {...this.customer})
      .subscribe((customerId: number) => {
        if (customerId !== undefined) {
          alert(`You have successfully registered with CustomerId : ${customerId} , You will be redirected to Sign up page to login to your account`);
          this.router.navigate(['/login']);
        }
      }, error => {
        alert('Error in registering you..Please try again..!');
      })
  }
}
