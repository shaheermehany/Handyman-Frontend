import { Component, OnInit ,OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { login } from 'src/app/models/login';
import { Subscription, Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user;

  constructor(private fb: FormBuilder, private LoginService: LoginService) {
    
  }


  ngOnInit(): void {
    this.initForm();
    //this.userlogin()
  }
  initForm() {
    this.loginForm = this.fb.group(
      {
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        role: new FormControl(null, Validators.required)
      }
    )
  };
   submit() {
    debugger;
    this.LoginService.login(this.loginForm.value).subscribe(data => {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('userId', data['userId']);
    });
    
    debugger
   }
}