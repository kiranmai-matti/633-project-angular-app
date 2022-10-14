import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.email],
      password: [""],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  signup() {
    // this.authService
    //   .signup({
    //     email: this.f.email.value,
    //     password: this.f.password.value,
    //   })
    //   .subscribe(() => this.router.navigate([this.authService.CONFIRM_PATH]));
  }
}
