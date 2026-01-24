import { Component, Input } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {BackgroundType} from './Helper/BackgroundType';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [
    NgClass,
    NgOptimizedImage,
    RouterLink,
    TranslatePipe
  ],
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() activeLink: string = "";
  @Input() title: string = 'Get Started';
  @Input() backgroundColor: BackgroundType = 'color';

  get buttonClasses(): string {
    if (this.backgroundColor === 'transparent') {
      return 'bg-transparent text-(--primary-color) border-[var(--primary-color)] py-2 lg:px-8 px-4 rounded-[20px] cursor-pointer transition relative border';
    } else {
      return 'bg-[var(--primary-color)] text-white py-2 lg:px-8 px-4 rounded-[20px] cursor-pointer transition relative';
    }
  }
}


