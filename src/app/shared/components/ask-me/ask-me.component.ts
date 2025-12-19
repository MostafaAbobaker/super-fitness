import {AfterViewChecked, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {GeminiService} from './Service/AskMe/gemini.service';
import {Message} from './Model/Message';
import {FormsModule} from '@angular/forms';
import {MessageCardComponent} from '../message-card/message-card.component';

@Component({
  selector: 'app-ask-me',
  imports: [
    NgClass,
    FormsModule,
    NgOptimizedImage,
    MessageCardComponent
  ],
  templateUrl: './ask-me.component.html',
  styleUrl: './ask-me.component.scss'  // NOTE: should be 'styleUrls'
})
export class AskMeComponent implements OnInit, AfterViewChecked {

  // private chat: any;  // Chat session object
  userInput: string = '';  // User input text
  messages: Message[] = [];  // Array to store all messages
  isLoading: boolean = false;  // Loading state to prevent multiple requests
  userName: string = 'Mohamed'; // Alternate It Then Catch From Auth

  isOpen: any = false;  // Chat window open/close state
  title: string = 'Hey Ask Me';  // Button or window title

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  // Inject GeminiService for API calls
  private readonly geminiService: GeminiService = inject(GeminiService)

  // Runs when the component loads
  async ngOnInit(): Promise<void> {

    // Welcome message
    this.messages.push({
      text: `Hello ${this.userName}! How can I assist you today?`,
      isUser: false,
      timestamp: new Date()
    });
  }

  // This hook runs after every change detection cycle
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if (this.chatContainer) {
        const element = this.chatContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }
    } catch (err) {
      console.error('Could not scroll to bottom:', err);
    }
  }

  // Toggle chat window open/close and update title
  AskMe(): void {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.title = 'Tap To Close';
    } else {
      this.title = 'Hey Ask Me';
    }
  }

  // Send user message and get AI response
  async SendMessage(): Promise<void> {
    // Ignore empty input or if already loading
    if(!this.userInput.trim() || this.isLoading) return;

    // Save trimmed user input and clear input box
    const userMessage: string = this.userInput.trim();
    this.userInput = '';

    // Add user's message to messages array
    this.messages.push({
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    });

    // Set loading state
    this.isLoading = true;

    try {
      // Send user message to AI and get response
      this.geminiService.SendChatToGeminiApi(userMessage).subscribe({

        next: (responseText: string) => {
          this.messages.push({
            text: responseText,
            isUser: false,
            timestamp: new Date()
          });

          this.isLoading = false;
        },
        error: (error) => {

          console.error('Error:', error);

          this.messages.push({
            text: 'Sorry, I encountered an error.',
            isUser: false,
            timestamp: new Date()
          });

          this.isLoading = false;
        }
      });
    }
    catch (error) {
      console.error('Error:', error);

      // Show error message in chat
      this.messages.push({
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      });

      this.isLoading = false;
    }
  }
}
