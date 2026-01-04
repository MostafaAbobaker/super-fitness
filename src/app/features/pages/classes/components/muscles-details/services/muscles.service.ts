import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusclesService {
  constructor(private http: HttpClient) {}

  getMusclesById(musclesId: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}levels/difficulty-levels/by-prime-mover?primeMoverMuscleId=${musclesId}`,
      {
        headers: { 'accept-language': 'en' },
      }
    );
  }
  getExercises(musclesId: string, difficultId: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}exercises/by-muscle-difficulty?primeMoverMuscleId=${musclesId}&difficultyLevelId=${difficultId}`,
      {
        headers: { 'accept-language': 'en' },
      }
    );
  }
}
