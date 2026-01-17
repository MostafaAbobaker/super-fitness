import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthApiEndPoint } from './enums/AuthApi.endPoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { SigninData, SigninResponse } from './interfaces/signin-payload';
import { SignupData, SignupResponse } from './interfaces/signup';
import { ForgotPasswordData, ForgotPassworResponse } from './interfaces/forgotPassword';
import { VerifyResetData, VerifyResetResponse } from './interfaces/verifyReset';
import { ResetPasswordData } from './interfaces/resetPassword';
import { ResetPasswordResponse } from './interfaces/resetPassword';
import { LogoutResponse } from './interfaces/logout';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService  implements AuthAPI {

  constructor(private _httpClient:HttpClient , private _authAPIAdaptorService:AuthAPIAdaptorService) { }

  signin(data: SigninData): Observable<SigninResponse> {
    return this._httpClient.post<SigninResponse>(AuthApiEndPoint.signin, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptSignin(res)),
      catchError((err)=> of(err))
    );
  }

  signupApi(data:SignupData): Observable<SignupResponse> {
    return this._httpClient.post<any>(AuthApiEndPoint.signup, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptSignup(res)),
      catchError((err)=> of(err))
    );
  }

  forgotPassword(data:ForgotPasswordData): Observable<ForgotPassworResponse> {
    return this._httpClient.post<any>(AuthApiEndPoint.forgotPassword, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptForgotPassword(res)),
      catchError((err)=> of(err))
    );
  }

  verifyReset(data:VerifyResetData): Observable<VerifyResetResponse> {
    return this._httpClient.post<any>(AuthApiEndPoint.verifyReset, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptVerifyReset(res)),
      catchError((err)=> of(err))
    );
  }
  
  resetPassword(data:ResetPasswordData): Observable<ResetPasswordResponse> {
    return this._httpClient.put<ResetPasswordResponse>(AuthApiEndPoint.resetPassword, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptResetPassword(res)),
      catchError((err)=> of(err))
    );
  }
  changePassword(data:any): Observable<any> {
    return this._httpClient.patch<any>(AuthApiEndPoint.changePassword, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptChangePassword(res)),
      catchError((err)=> of(err))
    );
  }
  
  logout(): Observable<LogoutResponse> {
    return this._httpClient.get<LogoutResponse>(AuthApiEndPoint.logout, {}).pipe(
      map((res)=> this._authAPIAdaptorService.adaptLogout(res)),
      catchError((err)=> of(err))
    );
  }
}
