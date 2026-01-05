import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {
  HealthyCategoryResponse,
  HealthyListResponse,
  MealsResponse,
} from '../interfaces/healthy';

@Injectable({
  providedIn: 'root',
})
export class HealthyService {
  constructor(private http: HttpClient) {}

  getMealsCategoies(): Observable<HealthyCategoryResponse> {
    return this.http.get<HealthyCategoryResponse>(
      `${environment.HealthyUrl}categories.php`
    );
  }
  getMealsByCategory(categoryName: string): Observable<HealthyListResponse> {
    return this.http.get<HealthyListResponse>(
      `${environment.HealthyUrl}filter.php?c=${categoryName}`
    );
  }
  getMealById(id: string): Observable<MealsResponse> {
    return this.http.get<MealsResponse>(
      `${environment.HealthyUrl}lookup.php?i=${id}`
    );
  }
}
