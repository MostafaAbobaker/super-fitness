import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthApiEndPoint } from './enums/AuthApi.endPoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { SigninData, SigninRespEdit, SigninResponse } from './interfaces/signin-payload';
import { SignupData, SignupRespEdit } from './interfaces/signup';
import { ForgotPasswordData, ForgotPasswordResponse } from './interfaces/forgotPassword';
import { VerifyResetData, VerifyResetResponse } from './interfaces/verifyReset';
import { ResetPasswordData } from './interfaces/resetPassword';
import { ResetPasswordResponse } from './interfaces/resetPassword';
import { LogoutResponse } from './interfaces/logout';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService  implements AuthAPI {

  constructor(private _httpClient:HttpClient , private _authAPIAdaptorService:AuthAPIAdaptorService) { }

  signin(data: SigninData): Observable<SigninRespEdit> {
    return this._httpClient.post(AuthApiEndPoint.signin, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptSignin(res as SigninResponse)),
      catchError((err)=> throwError(()=> this._authAPIAdaptorService.adaptError(err)))
    );
  }

  signupApi(data:SignupData): Observable<SignupRespEdit> {
    return this._httpClient.post(AuthApiEndPoint.signup, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptSignup(res as SigninResponse)),
      catchError((err)=> throwError(()=> this._authAPIAdaptorService.adaptError(err)))
    );
  }

  forgotPassword(data:ForgotPasswordData): Observable<ForgotPasswordResponse> {
    return this._httpClient.post<ForgotPasswordResponse>(AuthApiEndPoint.forgotPassword, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptForgotPassword(res)),
      catchError((err)=> throwError(()=> this._authAPIAdaptorService.adaptError(err)))
    );
  }

  verifyReset(data:VerifyResetData): Observable<VerifyResetResponse> {
    return this._httpClient.post<VerifyResetResponse>(AuthApiEndPoint.verifyReset, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptVerifyReset(res)),
      catchError((err)=> throwError(()=> this._authAPIAdaptorService.adaptError(err)))
    );
  }

  resetPassword(data:ResetPasswordData): Observable<ResetPasswordResponse> {
    return this._httpClient.put<ResetPasswordResponse>(AuthApiEndPoint.resetPassword, data).pipe(
      map((res)=> this._authAPIAdaptorService.adaptResetPassword(res)),
      catchError((err)=> throwError(()=> this._authAPIAdaptorService.adaptError(err)))
    );
  }


  logout(): Observable<LogoutResponse> {
    return this._httpClient.get<LogoutResponse>(AuthApiEndPoint.logout, {}).pipe(
      map((res)=> this._authAPIAdaptorService.adaptLogout(res)),
      catchError((err)=> throwError(()=> this._authAPIAdaptorService.adaptError(err)))
    );
  }
}
