import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { GeminiResponse } from '../../Model/GeminiResponse';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private httpClient = inject(HttpClient);

  /**
   * Sends the user's message to your .NET backend API.
   * The backend will connect to Gemini and return the AI response.
   *
   * @param message - User message to send to Gemini
   * @returns AI text response
   */
  async SendChatToGeminiApi(message: string): Promise<string> {
    try {
      // ❗ Your backend controller route is:
      // [Route("api/[controller]")] → /api/Gemini/ask
      //
      // So the correct URL is:
      // https://localhost:7026/api/Gemini/ask LOCAL
      // http://geminiapikey.runasp.net/api/Gemini/ask PRODUCTION
      const response = await firstValueFrom(
        this.httpClient.post<GeminiResponse>(
          `${environment.geminiApikey}/ask`,
          { message }
        )
      );

      // Extract the text from nested GeminiResponse structure
      const text: string =
        response?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text)
        throw new Error('No response text received from backend');

      return text;
    } catch (error) {
      console.error('Error sending message to Backend Gemini API:', error);
      throw error;
    }
  }
}
