import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  getAllMuscles(): Observable<any> {
    return this.http.get(`${environment.apiUrl}muscles`, {
      headers: { 'accept-language': 'en' },
    });
  }
  getMusclesRandom(): Observable<any> {
    return this.http.get(`${environment.apiUrl}muscles/random`, {
      headers: { 'accept-language': 'en' },
    });
  }
  getMusclesById(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}musclesGroup/${id}`, {
      headers: { 'accept-language': 'en' },
    });
  }
}
