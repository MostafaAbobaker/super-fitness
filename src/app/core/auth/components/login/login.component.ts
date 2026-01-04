import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { ButtonSubmitComponent } from '../../../../shared/components/button-submit/button-submit.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ErrorMessageComponent, ButtonSubmitComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  submitting = false;
  showPassword = false;
  serverError = '';
  subscription:  Subscription | undefined;
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.serverError = '';
    this.submitting = true;
    const { email, password } = this.form.value;
    this.subscription= this.auth.signin({ email: email as string, password: password as string }).subscribe({
        next: (res) => {  
          const token = (res as any)?.token || (res as any)?.data?.token || '';
          if (token) {
            localStorage.setItem('fitness_token', token);
          }
        },
        error: (err) => {
          this.serverError = err?.error?.message || 'Login failed';
        },
      });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
