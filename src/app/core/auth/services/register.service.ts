import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  firstName = signal('');
  lastName = signal('');
  email = signal('');
  password = signal('');
  rePassword = signal('');
  gender = signal('');
  height = signal('');
  weight = signal('');
  age = signal('');
  goal = signal('');
  activityLevel = signal('');

  

}
