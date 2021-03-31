import { BillingComponent } from './user/billing/billing.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminLoginComponent } from './authentication/admin-login/admin-login.component';
import { CommonNavbarComponent } from './header/common-navbar/common-navbar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { BackgroundCoverComponent } from './background-cover/background-cover.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdminNavbarComponent } from './header/admin-navbar/admin-navbar.component';

const routes: Routes = [
  { path: '', component: BackgroundCoverComponent},
  {
    path : 'Login', component : LoginComponent
  },
  {
   path : 'Register', component : RegisterComponent
  },
  
  {
    path: 'admin/admin', component : AdminHomeComponent
  },
  
  {
    path: 'Logout', component: BackgroundCoverComponent
  },
  
  {
    path: 'User/home', component: UserHomeComponent
  },
  {
    path: 'User/home/buy', component:BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
