import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {BookdetailsComponent} from './components/bookdetails/bookdetails.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {UserdetailsComponent} from './components/userdetails/userdetails.component';
import {PurchasebookComponent} from './components/purchasebook/purchasebook.component';

const routes: Routes = [
  {
    path:"" , component: HomeComponent
  },
  {
    path:"signup" , component: RegistrationComponent
  },
  {
    path:"bookdetails/:id" , component: BookdetailsComponent
  },
  {
    path:"login" , component: LoginComponent
  },
  {
    path:"logout" , component: LogoutComponent
  },
  {
    path:"purchase/:id" , component: PurchasebookComponent
  },
  {
    path:"userdetails" , component: UserdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
