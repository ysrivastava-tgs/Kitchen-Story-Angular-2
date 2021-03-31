import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login"
  loginid:string;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute) { }
  formSubmitted!:boolean;
  formControls!:any;
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
    this.formControls = this.loginForm.controls;
    this.loginid=this.route.snapshot.queryParamMap.get("loginid");
  }
  handleFormSubmmit(event){
     // tslint:disable-next-line: no-unused-expression
     this.formSubmitted = true;
     if ( this.loginForm.invalid ){
       return;
     }
     else{
      const obj = this.loginForm.value;
        if(obj.email ==="admin@gmail.com" && obj.password==="123456789"){
          this.router.navigate(['./admin/admin']);

        }
       else if(localStorage.getItem("email")==obj.email && localStorage.getItem("password")==obj.password)
      {
        sessionStorage.setItem("login","true");
        // alert(document.getElementById(this.loginid).innerHTML);
        // document.getElementById(this.loginid).innerHTML = "Logout";
        this.router.navigate(['./User/home']);
        
      }
      else{
        alert("Wrong email/password!! Try again");
        this.router.navigate(['./Login']);
      }
     }
  }
}
