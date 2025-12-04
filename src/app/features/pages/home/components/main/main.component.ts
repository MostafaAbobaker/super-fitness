import { Component } from '@angular/core';
import {NewsBarComponent} from '../../../../../shared/components/news-bar/news-bar.component';
import {ButtonComponent} from '../../../../../shared/components/button/button.component';
import {TranslatePipe} from '@ngx-translate/core';
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
  backGroundStr: string = 'color';

  titleEx: string = 'Explore More';
  backGroundEx: string = 'transparent';


}
