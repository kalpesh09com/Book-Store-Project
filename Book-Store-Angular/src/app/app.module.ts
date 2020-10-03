import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PurchasebookComponent } from './components/purchasebook/purchasebook.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookService} from './services/book.service';
import {UserService} from './services/user.service';
import {AuthenauthenticationService} from './services/authenauthentication.service';
import {OrderdetailsService} from './services/orderdetails.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookdetailsComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    PurchasebookComponent,
    UserdetailsComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService, UserService , AuthenauthenticationService , OrderdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
