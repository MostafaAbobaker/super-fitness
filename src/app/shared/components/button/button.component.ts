import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string = 'Get Started';
  @Input() backgroundColor: string = 'color';

  get buttonClasses(): string {
    if (this.backgroundColor === 'transparent') {
      return 'bg-transparent text-(--primary-color) border-[var(--primary-color)] py-2 px-8 rounded-[20px] cursor-pointer transition relative border';
    } else {
      return 'bg-[var(--primary-color)] text-white py-2 px-8 rounded-[20px] cursor-pointer transition relative';
    }
  }
}
