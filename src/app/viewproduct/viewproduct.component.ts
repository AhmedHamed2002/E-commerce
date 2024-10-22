import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})

export class ViewproductComponent {
  details!:any;
  id:any;
  constructor(private _DataService:DataService ,private route:ActivatedRoute )
  {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this._DataService.viewDetails(this.id).subscribe((data) => {
      this.details = data;
    })
  }
}
