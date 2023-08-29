import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';


export interface AuthResponse{
    _doc:{userName:string},
    accessToken:string,
    expiresIn:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null) 

  constructor(private http:HttpClient) {}

  signup(userName:string,password:string){
    
    return this.http.post<AuthResponse>('http://localhost:3000/auth/signup',
    {
      userName:userName,
      password:password,
    })
    .pipe(
      catchError(this.handleError),
      tap((resData)=>{
         this.handleAuthentication(resData._doc.userName,resData.accessToken,resData.expiresIn);
      })
    )
  }

  login(userName:string,password:string){

    return this.http.post<AuthResponse>("http://localhost:3000/auth/login",
    {
      userName:userName,
      password:password
    })
    .pipe(
      catchError(this.handleError),
      tap((resData)=>{
         this.handleAuthentication(resData._doc.userName,resData.accessToken,resData.expiresIn);
      })
    )
  }

  logout(){

  }

  private handleAuthentication(
    username:string,
    accessToken:string,
    expiresIn:string){
      const expirationDate =new Date(new Date().getTime() + +expiresIn * 1000);
      const user = new User(username,accessToken,expirationDate);
      this.user.next(user);
      localStorage.setItem('userData',JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse){
        
    let  errorMessage='An unexpected Error Occur';

    if(!errorRes.error || !errorRes.error.error)
    {

    }

    switch(errorRes.error.error.message){
     case 'EMAIL_EXISTS':
        errorMessage = 'Email address already exists'
        break
     case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email not registered!'
        break
     case 'INVALID_PASSWORD':
        errorMessage = 'Wrong password!'
        break
   }
    return throwError(errorMessage);
 
}
}
