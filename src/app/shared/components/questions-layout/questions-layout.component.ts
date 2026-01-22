import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-questions-layout',
  imports: [KnobModule, FormsModule],
  templateUrl: './questions-layout.component.html',
  styleUrl: './questions-layout.component.scss'
})
export class QuestionsLayoutComponent {
  // @Input() Count: number = 0;
  @Input() Title: string = '';
  @Input() Subtitle: string = '';
  @Input() value: number = 0;

}
