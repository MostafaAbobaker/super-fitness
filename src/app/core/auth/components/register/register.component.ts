import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuestionOneComponent } from './question-one/question-one.component';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink,QuestionOneComponent, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private _registerService = inject(RegisterService);
  startQuestionOne:boolean = false;

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rePassword: ['', [Validators.required, Validators.minLength(6)]],
    
  });

  submitting = false;
  showPassword = false;
  showRePassword = false;

  submit() {
    if (this.form.value.password !== this.form.value.rePassword) {
      this.form.get('rePassword')?.setErrors({ 'mismatch': true });
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    console.log(this.form.value);
    this._registerService.firstName.set(this.form.value.firstName || '');
    this._registerService.lastName.set(this.form.value.lastName || '');
    this._registerService.email.set(this.form.value.email || '');
    this._registerService.password.set(this.form.value.password || '');
    this._registerService.rePassword.set(this.form.value.rePassword || '');
    
    this.submitting = false;
    this.startQuestionOne = true;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleRePassword() {
    this.showRePassword = !this.showRePassword;
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get rePassword() { return this.form.get('rePassword'); }
}
