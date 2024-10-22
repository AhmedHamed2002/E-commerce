import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { ButtonToTopComponent } from './button-to-top/button-to-top.component';
import { ProductsComponent } from "./products/products.component";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ButtonToTopComponent, ProductsComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' ,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 ,transition:2}),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'E-commerce';
}
