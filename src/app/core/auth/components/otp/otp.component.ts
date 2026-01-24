import { Component, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { NewPasswordComponent } from '../new-password/new-password.component';
import { Subscription } from 'rxjs';
import { ButtonSubmitComponent } from '../../../../shared/components/button-submit/button-submit.component';
import { VerifyResetData } from '../../interfaces/VerifyResetData';
import { AuthService } from '../../services/auth.service';
import { ForgotPasswordData } from '../../interfaces/ForgotPasswordData';
import {AuthAPIService} from '../../../../../../projects/auth-api/src/lib/auth-api.service';

@Component({
  selector: 'app-otp',
  imports: [ToastModule, ReactiveFormsModule,InputOtpModule,NewPasswordComponent, ButtonSubmitComponent],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  providers: [MessageService]

})
export class OtpComponent {
  otpComponent: boolean = true;
  private messageService = inject(MessageService);
  private authApiService = inject(AuthAPIService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  subscription:  Subscription | undefined;
  subscriptionEmail:  Subscription | undefined;

  form = this.fb.group({
    resetCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.subscription= this.authApiService.verifyReset(this.form.value as VerifyResetData).subscribe({
        next: (res) => {
          console.log(res);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'OTP verified successfully' });
          this.otpComponent = false;
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.error });
        }
      })
    }
  }
  resendCode() {
    let email:string;
    email = this.authService.email();

    this.subscriptionEmail= this.authApiService.forgotPassword({email}).subscribe({
      next: (res) => {
        console.log(res);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'OTP resent successfully' });
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.error });
      }
    })
  }

  get otp() {
    return this.form.get('otp');
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionEmail?.unsubscribe();
  }
}
