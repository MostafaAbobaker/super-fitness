import { Component, inject, OnInit } from '@angular/core';
import { HealthyService } from '../../services/healthy.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { HealthyCategory, HealthyList, Meals } from '../../interfaces/healthy';
import { ButtonCategoryComponent } from "../../../../../shared/components/button-category/button-category.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-meals-details',
  imports: [CarouselModule, ButtonCategoryComponent, TranslateModule],
  templateUrl: './meals-details.component.html',
  styleUrl: './meals-details.component.scss',
})
export class MealsDetailsComponent {
  responsiveOptions: any[] | undefined;
  categoriesList: HealthyCategory[] = [];
  mealsCategory: HealthyList[] = [];
  mealsList: Meals[] = [];
  selectMeal!: Meals;
  mealId: string = '';
  private readonly healthyService = inject(HealthyService);
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.mealId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.alMealsCategories();
    this.mealsByCategory('Seafood');
    this.mealById(this.mealId);

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
  // all categories
  alMealsCategories(): void {
    this.healthyService.getMealsCategoies().subscribe({
      next: (res) => {
        this.categoriesList = res.categories;
      },
    });
  }
  // mealsByCategory
  mealsByCategory(id: string): void {
    this.healthyService.getMealsByCategory(id).subscribe({
      next: (res) => {
        this.mealsCategory = res.meals;
      },
    });
  }
  // MealById
  mealById(id: string): void {
    this.healthyService.getMealById(id).subscribe({
      next: (res) => {
        this.mealsList = res.meals;
        this.selectMeal = this.mealsList[0];
        console.log(this.mealsList);
        console.log(this.selectMeal);
      },
    });
  }
}
