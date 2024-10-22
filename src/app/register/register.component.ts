import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { DataService } from '../data.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm = new FormGroup({
    firstName: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10) ,Validators.pattern(/^[A-Z]/)] ) ,
    lastName: new FormControl() ,
    age: new FormControl() ,
    email: new FormControl() ,
    password: new FormControl() ,
  }) ;

  constructor(private _DataService:DataService , private _Router:Router){

  }

  register(X:any){
    console.log(X);
    // this._DataService.registerUser(X.value).subscribe((xx) =>{
      // console.log(xx);
      // if(xx.message == "success"){
        this._DataService.isLogined.next(true) ;
        this._Router.navigate(['./home']);
      // }
    // });
  }
  skip(){
    this._DataService.isSkip.next(true); 
  }
}
