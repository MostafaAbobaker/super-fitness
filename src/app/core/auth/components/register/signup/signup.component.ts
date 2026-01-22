import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../../../../../shared/components/error-message/error-message.component';
import { ButtonSubmitComponent } from '../../../../../shared/components/button-submit/button-submit.component';
import { GenderComponent } from '../gender/gender.component';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ErrorMessageComponent, ButtonSubmitComponent, GenderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
@Output()  onRegister: EventEmitter<void> = new EventEmitter<void>();
private fb = inject(FormBuilder);
  private _registerService = inject(RegisterService);
  startQuestionOne:boolean = false;
  showPassword = false;
  showRePassword = false;
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rePassword: ['', [Validators.required, Validators.minLength(6)]],
    
  }, { validators: this.passwordMatchValidator });

  

passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('rePassword')?.value;
    return password && confirmPassword && password === confirmPassword ? null : { passwordMismatch: true };
  }
  submit() {
    debugger
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    this._registerService.firstName.set(this.form.value.firstName || '');
    this._registerService.lastName.set(this.form.value.lastName || '');
    this._registerService.email.set(this.form.value.email || '');
    this._registerService.password.set(this.form.value.password || '');
    this._registerService.rePassword.set(this.form.value.rePassword || '');
    
    // this.startQuestionOne = true;
    this.onRegister.emit();
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
