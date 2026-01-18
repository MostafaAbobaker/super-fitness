import { Component, inject, OnInit } from '@angular/core';
import { ButtonCategoryComponent } from '../../../../../shared/components/button-category/button-category.component';
import { CategoryComponent } from '../../../healthy/components/category/category.component';
import { HealthyHeaderComponent } from '../../../../../shared/components/healthy-header/healthy-header.component';
import { chunkArray } from '../../../../../shared/services/chunk.util';
import {
  HealthyCategory,
  HealthyList,
} from '../../../healthy/interfaces/healthy';
import { HealthyService } from '../../../healthy/services/healthy.service';

@Component({
  selector: 'app-healthy-home',
  imports: [ButtonCategoryComponent, CategoryComponent, HealthyHeaderComponent],
  templateUrl: './healthy-home.component.html',
  styleUrl: './healthy-home.component.scss',
})
export class HealthyHomeComponent implements OnInit {
  categoriesList: HealthyCategory[] = [];
  mealsCategory: HealthyList[][] = [] as HealthyList[][];
  private readonly healthyService = inject(HealthyService);

  ngOnInit(): void {
    this.alMealsCategories();
    this.mealsByCategory('Seafood');
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
        this.mealsCategory = chunkArray(res.meals.slice(0, 6), 3);
      },
    });
  }
}
