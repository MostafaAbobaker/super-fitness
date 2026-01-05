import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment';
import {
  DifficultylevelResponse,
  ExerciseResponse,
} from '../../../interfaces/classes';

@Injectable({
  providedIn: 'root',
})
export class MusclesService {
  constructor(private http: HttpClient) {}

  getMusclesById(musclesId: string): Observable<DifficultylevelResponse> {
    return this.http.get<DifficultylevelResponse>(
      `${environment.apiUrl}levels/difficulty-levels/by-prime-mover?primeMoverMuscleId=${musclesId}`
    );
  }
  getExercises(
    musclesId: string,
    difficultId: string
  ): Observable<ExerciseResponse> {
    return this.http.get<ExerciseResponse>(
      `${environment.apiUrl}exercises/by-muscle-difficulty?primeMoverMuscleId=${musclesId}&difficultyLevelId=${difficultId}`
    );
  }
}
