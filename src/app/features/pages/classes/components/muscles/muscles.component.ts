import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { Muscles } from '../../interfaces/classes';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../../shared/services/language.service';

@Component({
  selector: 'app-muscles',
  imports: [CarouselModule, RouterLink, TranslateModule],
  templateUrl: './muscles.component.html',
  styleUrl: './muscles.component.scss',
})
export class MusclesComponent {
  responsiveOptions: any[] | undefined;
  @Input() musclesGroup: Muscles[][] = [] as Muscles[][];

  lang: string = 'en';

  constructor(
    private _languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.lang = this._languageService.language();
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
