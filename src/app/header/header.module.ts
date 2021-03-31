import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonNavbarComponent, AdminNavbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    AdminNavbarComponent,
    CommonNavbarComponent,
    
  ]
})
export class HeaderModule { }
