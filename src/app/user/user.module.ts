import { ProductService } from './../product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { BillingComponent } from './billing/billing.component';



@NgModule({
  declarations: [UserHomeComponent, BillingComponent],
  imports: [
    CommonModule,
  ],
  providers: [ProductService]
})
export class UserModule { }
