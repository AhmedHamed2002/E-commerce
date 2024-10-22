import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any[] = [] ;
  param:any;
  constructor(private _DataService:DataService ,private route:ActivatedRoute )
  {
  }

  ngOnInit(): void {
      this.param = this.route.snapshot.params['category'] ;
      this._DataService.getProducts(this.param).subscribe((data) => {
      this.products = data.products ;
    })
  }
}
