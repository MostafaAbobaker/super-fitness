import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HealthyService {
  constructor(private http: HttpClient) {}

  getMealsCategoies(): Observable<any> {
    return this.http.get(`${environment.HealthyUrl}categories.php`);
  }
  getMealsByCategory(categoryName: string): Observable<any> {
    return this.http.get(
      `${environment.HealthyUrl}filter.php?c=${categoryName}`
    );
  }
  getMealById(id: string): Observable<any> {
    return this.http.get(`${environment.HealthyUrl}lookup.php?i=${id}`);
  }
}
