import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { Muscles } from '../../interfaces/classes';

@Component({
  selector: 'app-muscles',
  imports: [CarouselModule, RouterLink],
  templateUrl: './muscles.component.html',
  styleUrl: './muscles.component.scss',
})
export class MusclesComponent {
  responsiveOptions: any[] | undefined;
  @Input() musclesGroup: Muscles[][] = [] as Muscles[][];

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
