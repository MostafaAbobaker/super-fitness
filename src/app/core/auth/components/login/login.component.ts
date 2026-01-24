import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { ButtonSubmitComponent } from '../../../../shared/components/button-submit/button-submit.component';
import { SigninPayload } from '../../interfaces/signin-payload';
import { AuthService } from '../../services/auth.service';
import {AuthAPIService} from '../../../../../../projects/auth-api/src/lib/auth-api.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ErrorMessageComponent, ButtonSubmitComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private _authAPIService = inject(AuthAPIService);
  private _auth = inject(AuthService);
  private router = inject(Router);

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
    // const { email, password } = this.form.value;
    this.subscription= this._authAPIService.signin(this.form.value as SigninPayload).subscribe({
        next: (res) => {
          console.log(res);

          localStorage.setItem('fitness_token', res.token);
          this._auth.isAuthenticated.set(true);
          this.router.navigate(['./'])
        },
        error: (err) => {
          console.log(err.error);


          this.serverError = err.error.error || 'Login failed';
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
