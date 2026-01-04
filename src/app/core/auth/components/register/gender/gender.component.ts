import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-gender',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss'
})
export class GenderComponent {
  form = new FormBuilder().group({
    gender: ['', Validators.required]
  });

  constructor(private router:Router , private _registerService: RegisterService) {}

  select(value: 'male' | 'female') {
    this.form.patchValue({ gender: value });
    this._registerService.gender.set(value);
  }

  next() {
    
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this._registerService.gender());
    // Navigation temporarily disabled – needs fix
    this.router.navigate(['/auth/register/question-two']);
  }
}
