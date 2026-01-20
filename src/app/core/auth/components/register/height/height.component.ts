import { CommonModule } from '@angular/common';
import { Component,  EventEmitter,  inject,  Output,  ViewChild } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RegisterService } from '../../../services/register.service';
import { QuestionsLayoutComponent } from '../../../../../shared/components/questions-layout/questions-layout.component';

@Component({
  selector: 'app-height',
  imports: [CommonModule, ReactiveFormsModule,CarouselModule , QuestionsLayoutComponent],
  templateUrl: './height.component.html',
  styleUrl: './height.component.scss'
})
export class HeightComponent {
  @Output() onHeightSelect = new EventEmitter<number>();
  private fb = inject(FormBuilder);

  form = this.fb.group({ height: [167, [Validators.required, Validators.min(60), Validators.max(250)]] });

  min = 60;
  max = 250;
  arrayNumber: number[] = [];
  customOptions!: OwlOptions;

  @ViewChild('owlCarousel') owl?: CarouselComponent;

  constructor(private router: Router, private _registerService: RegisterService) {
    this.buildNumbers();
    this.initCarouselOptions();
  }

  get height () { return this.form.get('height')?.value as number; }

  setAge(val: number) {
    if (val < this.min || val > this.max) return;
    this.form.patchValue({ height : val });
  }

  inc() { this.setAge(this.height  + 1); }
  dec() { this.setAge(this.height  - 1); }

  window(): number[] {
    const start = Math.max(this.min, this.height  - 3);
    const end = Math.min(this.max, this.height  + 3);
    const res: number[] = [];
    for (let i = start; i <= end; i++) res.push(i);
    return res;
  }

 

  buildNumbers() {
    this.arrayNumber = [];
    for (let i = this.min; i <= this.max; i++) this.arrayNumber.push(i);
  }

  initCarouselOptions() {
    const startIndex = Math.max(0, this.arrayNumber.indexOf(this.height));
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
    this._registerService.height.set(this.height.toString()); 
    this.onHeightSelect.emit();
    console.log(this._registerService.height());
    // this.router.navigate(['/auth/register/question-five']);
  } 
  
}
