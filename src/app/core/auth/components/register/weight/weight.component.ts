import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-weight',
  imports: [CommonModule, ReactiveFormsModule,CarouselModule],
  templateUrl: './weight.component.html',
  styleUrl: './weight.component.scss'
})
export class WeightComponent {
 private fb = inject(FormBuilder);

  form = this.fb.group({ weight: [90, [Validators.required, Validators.min(12), Validators.max(100)]] });

  min = 20;
  max = 300;
  arrayNumber: number[] = [];
  customOptions!: OwlOptions;

  @ViewChild('owlCarousel') owl?: CarouselComponent;

  constructor(private router: Router , private _registerService: RegisterService) {
    this.buildNumbers();
    this.initCarouselOptions();
  }

  get weight() { return this.form.get('weight')?.value as number; }

  setAge(val: number) {
    if (val < this.min || val > this.max) return;
    this.form.patchValue({ weight: val });
  }

  inc() { this.setAge(this.weight + 1); }
  dec() { this.setAge(this.weight - 1); }

  window(): number[] {
    const start = Math.max(this.min, this.weight - 3);
    const end = Math.min(this.max, this.weight + 3);
    const res: number[] = [];
    for (let i = start; i <= end; i++) res.push(i);
    return res;
  }

 

  buildNumbers() {
    this.arrayNumber = [];
    for (let i = this.min; i <= this.max; i++) this.arrayNumber.push(i);
  }

  initCarouselOptions() {
    const startIndex = Math.max(0, this.arrayNumber.indexOf(this.weight));
    this.customOptions = {
      items: 7,
      autoplayHoverPause: true,
      startPosition: startIndex,
      center: true,
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      responsive: {
        0: { items: 7 },
        400: { items: 7 },
        740: { items: 7 },
        940: { items: 7 }
      },
      nav: false
    };
  }
 
  onWheel(event: WheelEvent) {
    event.preventDefault();
    if (!this.owl) return;
    if (event.deltaY > 0) {
      this.owl.next();
    } else {
      this.owl.prev();
    }
  }
nextStep() {
    if (this.form.invalid) return;
    this._registerService.weight.set(this.weight.toString());
    console.log(this._registerService.weight());
    this.router.navigate(['/auth/register/question-four']);
  }
  
}
