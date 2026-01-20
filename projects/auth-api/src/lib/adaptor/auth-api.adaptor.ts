import { Injectable } from '@angular/core';
import {  SigninRespEdit, SigninResponse } from '../interfaces/signin-payload';
import { ForgotPasswordResponse } from '../interfaces/forgotPassword';
import { SignupRespEdit, SignupResponse } from '../interfaces/signup';
import { VerifyResetResponse } from '../interfaces/verifyReset';
import { ResetPasswordResponse } from '../interfaces/resetPassword';
import { LogoutResponse } from '../interfaces/logout';
import { AdapterAbstract } from './adapter-abstract';
import { ErrorData, ErrorResponse } from '../interfaces/Error';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdaptorService implements AdapterAbstract  {

  constructor() { }

  adaptError(data:ErrorData):ErrorResponse {
    return {
      message: data.message,
      error: data.error.error,
      status:data.status
    }
  }
  adaptSignin(data:SigninResponse): SigninRespEdit {
    return {
      message: data.message,
      token: data.token,
      userName: data.user.firstName
    }
  }
  adaptSignup(data:SignupResponse): SignupRespEdit {
    return {
      message: data.message,
      token: data.token,
      userName: data.user.firstName
    }
  }
  adaptForgotPassword(data: ForgotPasswordResponse):ForgotPasswordResponse {
    return {
      message: data.message,
      nfo: data.nfo
    }
  }
  adaptVerifyReset(data: VerifyResetResponse) :VerifyResetResponse {
    return {
      status:data.status
    }
  }
  adaptResetPassword(data: ResetPasswordResponse):ResetPasswordResponse {
    return {
      message: data.message,
      token: data.token
    };
  }

  adaptLogout(data:LogoutResponse) :LogoutResponse{
    return {
      message: data.message,
    }
  }
}
