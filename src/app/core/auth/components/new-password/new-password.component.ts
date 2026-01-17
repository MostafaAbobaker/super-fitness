import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { ButtonSubmitComponent } from '../../../../shared/components/button-submit/button-submit.component';
import { AuthAPIService } from 'authAPI';

@Component({
  selector: 'app-new-password',
  imports: [ReactiveFormsModule,ToastModule, ErrorMessageComponent, ButtonSubmitComponent],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
  providers: [MessageService]

})
export class NewPasswordComponent {
  private fb = inject(FormBuilder);
  private authApi = inject(AuthAPIService);
  private auth = inject(AuthService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  subscription:  Subscription | undefined;
  



form = this.fb.group({
    email: [this.auth.email(), [Validators.required, Validators.email]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  }, { validators: this.passwordMatchValidator });



passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password && confirmPassword && password === confirmPassword ? null : { passwordMismatch: true };
  }

 
submit() {
    if (this.form.valid) {
      const { email, newPassword } = this.form.value;
      this.subscription = this.authApi.resetPassword({ email, newPassword } as any ).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password updated' });
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
        }
      });
    }
  }


 
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
  onDestroy() {
    this.subscription?.unsubscribe();
  }
}
