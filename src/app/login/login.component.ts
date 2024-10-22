import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl() ,
    password: new FormControl()
  }) ;

  constructor(private _DataService:DataService , private _Router:Router){

  }

  loginData(x:any){
    console.log(x) ;
    this._DataService.loginUser(x.value).subscribe((data) =>{
    console.log(data);
    if(data.error == undefined){
      this._DataService.isLogined.next(true) ; 
      this._Router.navigate(['./home']);
      }
    });
  }


}
