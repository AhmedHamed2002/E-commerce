import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isLogined =  new BehaviorSubject(false) ;
  isSkip =  new BehaviorSubject(false) ;

  //rxjs
  constructor(private _HttpClient:HttpClient) {
  }
  getAllGategory():Observable<any>{
    let res =  this._HttpClient.get('https://dummyjson.com/products/category-list') ;
    return res ;
  }
  getProducts(category:string):Observable<any>{
    let res =  this._HttpClient.get(`https://dummyjson.com/products/category/${category}`) ;
    return res ;
  }
  viewDetails(ID:string):Observable<any>{
    let res =  this._HttpClient.get(`https://dummyjson.com/products/${ID}`) ;
    return res ;
  }
  registerUser(data:any):Observable<any>{
    let  res  =  this._HttpClient.post('https://dummyjson.com/user/login', data) ;
    return res ;
  }
  loginUser(data:any):Observable<any>{
    let  res  =  this._HttpClient.post('https://dummyjson.com/user/login', data) ;
    return res ;
  }
}
