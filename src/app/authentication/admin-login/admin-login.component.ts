import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }
  formSubmitted!:boolean;
  formControls!:any;
  loginForm!: FormGroup;
  flag_for_links: boolean;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
    this.formControls = this.loginForm.controls;
  }
  handleFormSubmmit(event){
     // tslint:disable-next-line: no-unused-expression
     this.formSubmitted = true;
     if ( this.loginForm.invalid ){
       return;
     }
     else{
      const obj = this.loginForm.value;
      let email = obj.email;
      let password = obj.password;
      if(email ==="admin@gmail.com" && password ==="123456789")
      {
       
        this.router.navigate(['./admin/admin/navbar']);
        
      }
     
      else{
        alert("Wrong email/password!! Try again");
        this.router.navigate(['./admin/admin']);
      }
     }
  }
}
