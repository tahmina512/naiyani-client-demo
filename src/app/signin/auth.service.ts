import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';


export interface AuthResponse{
    _id:string,
    userName:string,
    accessToken:string,
    expiresIn:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  signup(email:string,password:string){

    return this.http.post("http://localhost:3000/auth/signup",
    {
      email:email,
      password:password
    })
    .pipe(
      catchError(this.handlError),
      tap((resData)=>{
         this.handleAuthentication(resData._id,resData.userName,resData.accessToken,resData.expiresIn);
      })
    )
  }

  login(email:string,password:string){

    return this.http.post("http://localhost:3000/auth/login",
    {
      email:email,
      password:password
    })
    .pipe(
      catchError(this.handlError),
      tap((resData)=>{
         this.handleAuthentication(resData._id,resData.userName,resData.accessToken,resData.expiresIn);
      })
    )
  }
}
