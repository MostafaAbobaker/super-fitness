import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OtpComponent } from "../otp/otp.component";
import { Subscription } from 'rxjs';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { ButtonSubmitComponent } from '../../../../shared/components/button-submit/button-submit.component';
@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, ToastModule, OtpComponent, ErrorMessageComponent, ButtonSubmitComponent],
  templateUrl: './forget-password.component.html',  
  styleUrl: './forget-password.component.scss',
  providers: [MessageService]

})
export class ForgetPasswordComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);
   subscription:  Subscription | undefined;

  forgetPassword:boolean = true;


  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      let email = this.form.value.email as string;
      this.subscription = this.authService.forgetPassword(email).subscribe({
        next: (res) => {
          console.log(res);
          this.authService.email.set(email);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Check your email for the reset link' });
          this.forgetPassword = false;
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.error });

        }
      })
    }
  }
  get email() {
    return this.form.get('email');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
