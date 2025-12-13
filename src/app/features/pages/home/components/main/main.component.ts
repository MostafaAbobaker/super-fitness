import { Component } from '@angular/core';
import {NewsBarComponent} from '../../../../../shared/components/news-bar/news-bar.component';
import {ButtonComponent} from '../../../../../shared/components/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
import {BackgroundType} from '../../../../../shared/components/button/Helper/BackgroundType';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    NewsBarComponent,
    ButtonComponent,
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  titleStr: string = 'Get Started';
  backGroundStr: BackgroundType = 'color';
  linkStr: string = '/getStarted';

  titleEx: string = 'Explore More';
  backGroundEx: BackgroundType = 'transparent';
  linkEx: string = '/explore';
}
