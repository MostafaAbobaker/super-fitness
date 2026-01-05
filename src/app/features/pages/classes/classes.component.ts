import { Component, inject, OnInit } from '@angular/core';
import { AllMuscles, Muscles } from './interfaces/classes';
import { ClassesService } from './services/classes.service';
import { chunkArray } from '../../../shared/services/chunk.util';
import { MusclesComponent } from './components/muscles/muscles.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonCategoryComponent } from '../../../shared/components/button-category/button-category.component';
import { ClassesHeaderComponent } from '../../../shared/components/classes-header/classes-header.component';
import { FullBodyBtnComponent } from '../../../shared/components/full-body-btn/full-body-btn.component';

@Component({
  selector: 'app-classes',
  imports: [
    CarouselModule,
    MusclesComponent,
    ButtonCategoryComponent,
    ClassesHeaderComponent,
    FullBodyBtnComponent,
  ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent implements OnInit {
  musclesList: AllMuscles[] = [];
  musclesGroup: Muscles[][] = [] as Muscles[][];

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
        this.musclesGroup = chunkArray(res.muscles, 6);
      },
    });
  }

  // MusclesById
  getMusclesData(id: string): void {
    this.classesService.getMusclesById(id).subscribe({
      next: (res) => {
        // this.musclesGroup = res.muscles;
        this.musclesGroup = chunkArray(res.muscles, 6);
      },
    });
  }
}
