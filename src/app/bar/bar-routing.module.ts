import { LoginComponent } from './../components/login/login.component';
import { BarHeaderComponent } from './header/bar-header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"",component:BarHeaderComponent,children:[
    {path: "",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"recharge",component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }