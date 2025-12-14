import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigninResponse } from '../interfaces/signin-response';
import { SigninPayload } from '../interfaces/signin-payload';
import { SignupPayload } from '../interfaces/signup-payload';
import { SignupResponse } from '../interfaces/signup-response';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  signin(payload: SigninPayload): Observable<SigninResponse> {
    return this.http.post<SigninResponse>('auth/signin', payload);
  }

  signup(payload: SignupPayload): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('auth/signup', payload);
  }
}
