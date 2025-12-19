import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, single } from 'rxjs';
import { SigninResponse } from '../interfaces/signin-response';
import { SigninPayload } from '../interfaces/signin-payload';
import { SignupPayload } from '../interfaces/signup-payload';
import { SignupResponse } from '../interfaces/signup-response';
import { NewPasswordResponse } from '../interfaces/new-password-response';


@Injectable({ providedIn: 'root' })
export class AuthService {
  email = signal<string>('')

  private http = inject(HttpClient);

  signin(payload: SigninPayload): Observable<SigninResponse> {
    return this.http.post<SigninResponse>('auth/signin', payload);
  }

  signup(payload: SignupPayload): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('auth/signup', payload);
  }

  forgetPassword(email: string): Observable<any> {
    return this.http.post<any>('auth/forgotPassword', { email });
  }
  VerifyReset(resetCode:any): Observable<any> {
    return this.http.post<any>('auth/verifyResetCode', resetCode);
  }
  newPassword(payload: any): Observable<NewPasswordResponse> {
    return this.http.put<NewPasswordResponse>('auth/resetPassword', payload);
  }
}
