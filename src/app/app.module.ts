import { UserModule } from './user/user.module';
import { ProductService } from './product.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeaderModule } from './header/header.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundCoverComponent } from './background-cover/background-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundCoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HeaderModule,
    AuthenticationModule,
    UserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
