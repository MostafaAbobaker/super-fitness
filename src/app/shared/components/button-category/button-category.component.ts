import { Component, Input } from '@angular/core';
import { AllMuscles } from '../../../features/pages/classes/interfaces/classes';
import { HealthyCategory } from '../../../features/pages/healthy/interfaces/healthy';

@Component({
  selector: 'app-button-category',
  imports: [],
  templateUrl: './button-category.component.html',
  styleUrl: './button-category.component.scss',
})
export class ButtonCategoryComponent {
  @Input() musclesList!: AllMuscles | HealthyCategory | any;
}
