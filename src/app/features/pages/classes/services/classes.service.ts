import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AllMusclesResponse, MusclesResponse } from '../interfaces/classes';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  getAllMuscles(): Observable<AllMusclesResponse> {
    return this.http.get<AllMusclesResponse>(`${environment.apiUrl}muscles`);
  }
  getMusclesRandom(): Observable<MusclesResponse> {
    return this.http.get<MusclesResponse>(
      `${environment.apiUrl}muscles/random`
    );
  }
  getMusclesById(id: string): Observable<MusclesResponse> {
    return this.http.get<MusclesResponse>(
      `${environment.apiUrl}musclesGroup/${id}`
    );
  }
}
