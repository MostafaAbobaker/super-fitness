import { Component } from '@angular/core';
import {  FormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RegisterService } from '../../../services/register.service';
import { AuthAPIService } from 'authAPI';
import { SignupPayload } from '../../../interfaces/signup-payload';
import { QuestionsLayoutComponent } from "../../../../../shared/components/questions-layout/questions-layout.component";

@Component({
  selector: 'app-activityLevel',
  imports: [FormsModule, RadioButtonModule, QuestionsLayoutComponent ],
  templateUrl: './activityLevel.component.html',
  styleUrl: './activityLevel.component.scss'
})
export class ActivityLevelComponent {
/* form = new FormGroup({
    activityLevel: new FormControl('', Validators.required)
  }); */
activityLevelSelected: string = '';
constructor(private router: Router, private _registerService: RegisterService , private _authService: AuthAPIService){

}

  activityLevel=[
    {
      key:'key1',
      value:'Rookie'
    },  
    {
      key:'level2',
      value:'Beginner'
    },
    {
      key:'level3',
      value:'Intermediate'
    },
    {
      key:'level4',
      value:'Advance'
    },
    {
      key:'level5',
      value:'True Beast'
    },
  ]
    


  nextStep() {
    
    
    this._registerService.activityLevel.set(this.activityLevelSelected || '');
    let signupData = {
      firstName: this._registerService.firstName(),
      lastName: this._registerService.lastName(),
      email: this._registerService.email(),
      password: this._registerService.password(),
      rePassword: this._registerService.rePassword(),
      gender: this._registerService.gender(),
      height: +this._registerService.height(),
      weight: +this._registerService.weight(),
      age: +this._registerService.age(),
      goal: this._registerService.goal(),
      activityLevel: this._registerService.activityLevel(),
    }
    console.log(signupData);
    
    this._authService.signupApi(signupData as SignupPayload).subscribe({
      next: (res) => {
       
        console.log(res);
        
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })
   
    // this.router.navigate(['/auth/register/question-six']);
  }
 

}
