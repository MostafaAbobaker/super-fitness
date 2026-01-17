import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { SigninData, SigninRespEdit, SigninResponse } from '../interfaces/signin-payload';
import { ChangePasswordResponse } from '../interfaces/changePassword';
import { ForgotPassworResponse } from '../interfaces/forgotPassword';
import { SignupRespEdit, SignupResponse } from '../interfaces/signup';
import { VerifyResetResponse } from '../interfaces/verifyReset';
import { ResetPasswordResponse } from '../interfaces/resetPassword';
import { LogoutResponse } from '../interfaces/logout';
import { AdapterAbstract } from './adapter-abstract';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdaptorService implements AdapterAbstract  {

  constructor() { }
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
  adaptForgotPassword(data: ForgotPassworResponse):ForgotPassworResponse {
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
  adaptChangePassword(data:ChangePasswordResponse): ChangePasswordResponse {
    return {
      message: data.message,
      token: data.token 
    }
  }
  adaptLogout(data:LogoutResponse) :LogoutResponse{
    return {
      message: data.message,
    }
  }
}
