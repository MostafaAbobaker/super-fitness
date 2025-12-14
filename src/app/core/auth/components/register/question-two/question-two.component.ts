import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-question-two',
  imports: [CommonModule, ReactiveFormsModule,CarouselModule ],
  templateUrl: './question-two.component.html',
  styleUrl: './question-two.component.scss',

})
export class QuestionTwoComponent {
  private fb = new FormBuilder();
  form = this.fb.group({ age: [27, [Validators.required, Validators.min(12), Validators.max(100)]] });

  min = 12;
  max = 100;
  arrayNumber: number[] = [];
  customOptions!: OwlOptions;

  @ViewChild('owlCarousel') owl?: CarouselComponent;

  constructor(private router: Router , private _registerService: RegisterService) {
    this.buildNumbers();
    this.initCarouselOptions();
  }

  get age() { return this.form.get('age')?.value as number; }

  setAge(val: number) {
    if (val < this.min || val > this.max) return;
    this.form.patchValue({ age: val });
  }

  inc() { this.setAge(this.age + 1); }
  dec() { this.setAge(this.age - 1); }

  window(): number[] {
    const start = Math.max(this.min, this.age - 3);
    const end = Math.min(this.max, this.age + 3);
    const res: number[] = [];
    for (let i = start; i <= end; i++) res.push(i);
    return res;
  }

  

  buildNumbers() {
    this.arrayNumber = [];
    for (let i = this.min; i <= this.max; i++) this.arrayNumber.push(i);
  }

  initCarouselOptions() {
    const startIndex = Math.max(0, this.arrayNumber.indexOf(this.age));
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
  next() {
    
    if (this.form.invalid) return;
    console.log(this.form.value);


    this._registerService.age.set(this.age.toString());
    console.log(this._registerService.age());
    this.router.navigate(['/auth/register/question-three']);
  }
  backStep() {
    this.router.navigate(['/auth/register/question-one']);
  }
}
