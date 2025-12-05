import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import {
  GoogleGenerativeAI,
  GenerativeModel,
  ChatSession,
  GenerateContentResult,
  EnhancedGenerateContentResponse
} from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private model: GenerativeModel;  // The AI model instance
  private genAI: GoogleGenerativeAI;  // Main API client

  constructor() {
    // Initialize the API client with the API key from environment
    this.genAI = new GoogleGenerativeAI('AIzaSyAolwvJ2W6VHIV-M27IRnxHXOSsosP39Eg');

    // Get the specific generative model (Gemini 2.5 Flash)
    this.model = this.genAI.getGenerativeModel({model: "gemini-2.5-flash"});
  }

  // Start a new chat session with empty history
  async StartChat(): Promise<ChatSession> {
    return this.model.startChat({
      history: [],  // No previous messages at start
      generationConfig: {
        maxOutputTokens: 1000,  // Limit max tokens in response
      },
    });
  }

  // Send a user message and get the AI response text
  async SendChatMessage(chat: ChatSession, message: string): Promise<string> {
    try {
      // Send message to chat session and get the result
      const result: GenerateContentResult = await chat.sendMessage(message);
      const response: EnhancedGenerateContentResponse = result.response;

      // Extract and return text from the AI response
      return response.text();
    } catch (error) {
      console.error('Error in SendChatMessage Service', error);
      // Rethrow error to be handled by caller
      throw error;
    }
  }
}
