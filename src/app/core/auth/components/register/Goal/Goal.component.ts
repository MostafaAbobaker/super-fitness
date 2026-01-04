import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RegisterService } from '../../../services/register.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Goal',
  imports: [ CommonModule ,RadioButtonModule,FormsModule],
  templateUrl: './Goal.component.html',
  styleUrl: './Goal.component.scss'
})
export class GoalComponent {
  goalSelected: string = '';
  name:string = '';

 /*  form = new FormGroup({
    goal: new FormControl('', Validators.required)
  }); */
  constructor(private router: Router , private _registerService: RegisterService) {
    /* this.form.valueChanges.subscribe((value) => {
      console.log(value);
    }) */
  }

  Goals=['Gain weight',
    'Mlose weight',
    'Get fitter',
    'Gain more flexible',
    'Learn the basic',
  ]


  nextStep() {
    
    
    this._registerService.goal.set(this.goalSelected || '');

   console.log(this._registerService.goal());
   
    this.router.navigate(['/auth/register/question-six']);
  }
  
}
