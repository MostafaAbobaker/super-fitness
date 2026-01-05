import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { HealthyList } from '../../interfaces/healthy';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../../shared/services/language.service';

@Component({
  selector: 'app-category',
  imports: [CarouselModule, RouterLink, TranslateModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  @Input() mealsGroup: HealthyList[][] = [] as HealthyList[][];

  ngOnInit(): void {

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
