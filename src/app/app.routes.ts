import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { myguardGuard } from './myguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'' ,redirectTo:'/register' ,pathMatch:'full'},
  {path:'home' ,component:HomeComponent , canActivate:[myguardGuard]},
  {path:'register' ,component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  {path:'category' ,component:CategoryComponent, canActivate:[myguardGuard]},
  {path:'products/:category',component:ProductsComponent, canActivate:[myguardGuard]},
  {path:'product/:id',component:ViewproductComponent, canActivate:[myguardGuard]},
  {path:'**' ,component:NotfoundComponent}
];
