import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-message-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {
  @Input() typeMessageCard: boolean | undefined;
  @Input() messageText: string | undefined;
}
