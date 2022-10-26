import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard/:categoryId', component: DashboardComponent},
  { path: 'product/:prdId', pathMatch: 'full',component: ProductDetailsComponent},
  { path: 'register', component: SignUpComponent, pathMatch: 'full' },
  { path: 'login', component: SignInComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
