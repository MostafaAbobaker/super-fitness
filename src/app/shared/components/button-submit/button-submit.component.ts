import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-submit',
  imports: [ReactiveFormsModule],
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss'
})
export class ButtonSubmitComponent {
  @Input() form: FormGroup | null = null;
  @Input() disabled: boolean = false;
  @Input() buttonText: string = 'Submit';
  @Input() type: string = 'submit';
  @Input() className: string = 'w-full btn-primary';
}
