import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-password',
  imports: [ReactiveFormsModule,ToastModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
  providers: [MessageService]

})
export class NewPasswordComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private messageService = inject(MessageService);
  private router = inject(Router);
    subscription:  Subscription | undefined;
  
  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  submit() {
    debugger
    if(this.form.value.password !== this.form.value.confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match' });
      return;
    }
    if (this.form.valid) {
      let formNewPassword = this.fb.group({
        email: [this.auth.email(), [Validators.required, Validators.email]],
        newPassword: [this.form.value.password, [Validators.required, Validators.minLength(6)]],
      })
      this.subscription= this.auth.newPassword(formNewPassword.value).subscribe({
        next: (res) => {
          console.log(res);
          
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password updated' });
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.log(err);
          
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
        }
      })
    }
  }

  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
  onDestroy() {
    this.subscription?.unsubscribe();
  }
}
