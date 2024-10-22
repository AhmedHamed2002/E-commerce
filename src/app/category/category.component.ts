import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories:any[] = [] ;
  image = "https://th.bing.com/th/id/OIP.0ZM7e1Z_zmebcBILunvbHQHaEn?rs=1&pid=ImgDetMain"
  constructor(private _DataService:DataService)
  {

  }

  ngOnInit(): void {
      this._DataService.getAllGategory().subscribe((data) => {
      this.categories = data ;
    })
  }
}
