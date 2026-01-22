import {  Injectable, signal } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AuthService {
  email = signal<string>('')
  isAuthenticated = signal<boolean>(false)
  
  constructor() {
    let token = localStorage.getItem('fitness_token');
    if(token){
      this.isAuthenticated.set(true);
    }
  } 
}
