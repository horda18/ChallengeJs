import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public authService: AuthServiceService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.submitted = true;
    this.authService.signIn(this.signinForm.value)
  }

  // Getter to access form control
  get myForm(){
    return this.signinForm.controls;
  }
  
}
