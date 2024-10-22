import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink ,RouterLinkActive ,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  logined:any ;
  skip:any  ;

  constructor(private _DataService:DataService , private  _Router:Router){
  }

  ngOnInit(): void {
    this._DataService.isLogined.subscribe(x =>{
      this.logined =  x ;
    })
    this._DataService.isSkip.subscribe(y => {
      this.skip =  y ;
    })
  }

  logOut(){
    this._DataService.isLogined.next(false) ;
    this._Router.navigate(['/register']) ;
  }

}
