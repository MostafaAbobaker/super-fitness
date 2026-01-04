import { Component, inject, OnInit } from '@angular/core';
import { HealthyService } from './services/healthy.service';
import { chunkArray } from '../../../shared/services/chunk.util';
import { CategoryComponent } from './components/category/category.component';
import { HealthyCategory, HealthyList } from './interfaces/healthy';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonCategoryComponent } from "../../../shared/components/button-category/button-category.component";
import { HealthyHeaderComponent } from "../../../shared/components/healthy-header/healthy-header.component";

@Component({
  selector: 'app-healthy',
  imports: [CategoryComponent, ButtonCategoryComponent, HealthyHeaderComponent],
  templateUrl: './healthy.component.html',
  styleUrl: './healthy.component.scss',
})
export class HealthyComponent implements OnInit {
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
        console.log(this.categoriesList);
      },
    });
  }
  // mealsByCategory
  mealsByCategory(id: string): void {
    this.healthyService.getMealsByCategory(id).subscribe({
      next: (res) => {
        this.mealsCategory = chunkArray(res.meals, 6);
        console.log(this.mealsCategory);
      },
    });
  }
}
