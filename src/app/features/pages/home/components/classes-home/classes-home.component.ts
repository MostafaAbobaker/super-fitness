import { Component, inject, OnInit } from '@angular/core';
import { ClassesHeaderComponent } from '../../../../../shared/components/classes-header/classes-header.component';
import { FullBodyComponent } from '../../../../../shared/components/full-body/full-body.component';
import { ButtonCategoryComponent } from '../../../../../shared/components/button-category/button-category.component';
import { MusclesComponent } from '../../../classes/components/muscles/muscles.component';
import { chunkArray } from '../../../../../shared/services/chunk.util';
import { AllMuscles, Muscles } from '../../../classes/interfaces/classes';
import { ClassesService } from '../../../classes/services/classes.service';

@Component({
  selector: 'app-classes-home',
  imports: [
    ClassesHeaderComponent,
    FullBodyComponent,
    ButtonCategoryComponent,
    MusclesComponent,
  ],
  templateUrl: './classes-home.component.html',
  styleUrl: './classes-home.component.scss',
})
export class ClassesHomeComponent implements OnInit {
  musclesList: AllMuscles[] = [];
  musclesBox: Muscles[][] = [];

  private readonly classesService = inject(ClassesService);

  ngOnInit(): void {
    this.getMusclesRandom();
    this.allMuscles();
  }

  // all muscles
  allMuscles(): void {
    this.classesService.getAllMuscles().subscribe({
      next: (res) => {
        this.musclesList = res.musclesGroup;
      },
    });
  }

  // full body
  getMusclesRandom(): void {
    this.classesService.getMusclesRandom().subscribe({
      next: (res) => {
        this.musclesBox = chunkArray(res.muscles.slice(0, 6), 3);
      },
    });
  }

  // MusclesById
  getMusclesData(id: string): void {
    this.classesService.getMusclesById(id).subscribe({
      next: (res) => {
        this.musclesBox = chunkArray(res.muscles.slice(0, 6), 3);
      },
    });
  }
}
