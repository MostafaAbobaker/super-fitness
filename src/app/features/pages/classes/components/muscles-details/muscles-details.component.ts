import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { chunkArray } from '../../../../../shared/services/chunk.util';
import { AllMuscles, Exercise } from '../../interfaces/classes';
import { MusclesService } from './services/muscles.service';
import { HealthyList } from '../../../healthy/interfaces/healthy';
import { HealthyService } from '../../../healthy/services/healthy.service';
import { CategoryComponent } from "../../../healthy/components/category/category.component";
import { ButtonCategoryComponent } from "../../../../../shared/components/button-category/button-category.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-muscles-details',
  imports: [CarouselModule, CategoryComponent, 
    ButtonCategoryComponent, TranslateModule],
  templateUrl: './muscles-details.component.html',
  styleUrl: './muscles-details.component.scss',
})
export class MusclesDetailsComponent {
  responsiveOptions: any[] | undefined;
  musclesList: AllMuscles[] = [];
  exercisesList: Exercise[] = [];
  selectExercise!: Exercise;
  musclesId: string = '';
  difficult: string = '';
  mealsList: HealthyList[][] = [];
  safeVideoUrl!: SafeResourceUrl;

  private readonly musclesService = inject(MusclesService);
  private readonly healthyService = inject(HealthyService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  constructor() {
    this.musclesId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.allMusclesById(this.musclesId);
    this.getExercisesDifficult(this.musclesId, '67c797e226895f87ce0aa94b');
    this.mealsByCategory('Seafood');

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  // all muscles by id
  allMusclesById(id: string): void {
    this.musclesService.getMusclesById(id).subscribe({
      next: (res) => {
        this.musclesList = res.difficulty_levels;
      },
    });
  }

  // exercises difficult
  getExercisesDifficult(musclesId: string, difficultId: string): void {
    this.musclesService.getExercises(musclesId, difficultId).subscribe({
      next: (res) => {
        this.exercisesList = res.exercises;
        this.selectExercise = this.exercisesList[0];
      },
    });
  }
  selectedExercise(exercise: any): void {
    this.selectExercise = exercise;
    const url = exercise.short_youtube_demonstration_link;

    if (!url) {
      this.safeVideoUrl = '';
      return;
    }

    const videoId = this.extractYoutubeId(url);

    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      this.safeVideoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }
  // extractYoutubeId
  extractYoutubeId(url: string): string | null {
    // youtu.be/VIDEO_ID
    if (url.includes('youtu.be')) {
      return url.split('youtu.be/')[1]?.split('?')[0];
    }

    // youtube.com/watch?v=VIDEO_ID
    if (url.includes('watch?v=')) {
      return url.split('watch?v=')[1]?.split('&')[0];
    }

    return null;
  }

  // mealsByCategory
  mealsByCategory(id: string): void {
    this.healthyService.getMealsByCategory(id).subscribe({
      next: (res) => {
        this.mealsList = chunkArray(res.meals.slice(0, 6), 3);
      },
    });
  }
}
