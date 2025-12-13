import { Component } from '@angular/core';
import {NewsBarComponent} from '../../../shared/components/news-bar/news-bar.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';
import {BackgroundType} from '../../../shared/components/button/Helper/BackgroundType';

@Component({
  selector: 'app-about',
  imports: [
    NewsBarComponent,
    ButtonComponent,
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title: string = 'Get Started';
  backGround: BackgroundType = 'color';
  link: string = '/getStarted';
}
