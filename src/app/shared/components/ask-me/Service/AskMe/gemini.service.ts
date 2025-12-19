import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import { GeminiResponse } from '../../Model/GeminiResponse';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  text: string = '';

  private httpClient = inject(HttpClient);

  /**
   * Sends the user's message to your .NET backend API.
   * The backend will connect to Gemini and return the AI response.
   *
   * @param message - User message to send to Gemini
   * @returns AI text response
   */
  SendChatToGeminiApi(message: string): Observable <string> {
    return this.httpClient.post<GeminiResponse>(`${environment.geminiApikey}/ask`, { message }).pipe(
      map((response: GeminiResponse): string => {
        this.text = response?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!this.text) {
          throw new Error('No response text received from backend');
        }

        return this.text;
      }),
      catchError(err => {
        console.error('Error sending message to Backend Gemini API:', err);
        return throwError(() => err);
      })
    );
  }
}
