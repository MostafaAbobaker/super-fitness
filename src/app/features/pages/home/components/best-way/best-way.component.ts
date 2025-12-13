import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-best-way',
  imports: [
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './best-way.component.html',
  styleUrl: './best-way.component.scss'
})
export class BestWayComponent {

}
