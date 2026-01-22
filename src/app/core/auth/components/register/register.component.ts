import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { StepperModule } from 'primeng/stepper';
import { SignupComponent } from "./signup/signup.component";
import { GenderComponent } from './gender/gender.component';
import { OldComponent } from './Old/Old.component';
import { WeightComponent } from './weight/weight.component';
import { HeightComponent } from './height/height.component';
import { GoalComponent } from './Goal/Goal.component';
import { ActivityLevelComponent } from "./activityLevel/activityLevel.component";


@Component({
  selector: 'app-register',
  imports: [StepperModule, ButtonModule, SignupComponent, GenderComponent, OldComponent, WeightComponent, HeightComponent, GoalComponent, ActivityLevelComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
}
