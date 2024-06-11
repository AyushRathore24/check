import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor(private element: ElementRef) {}

  @HostListener('focus')
   onFocus() {
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('blur') 
  onBlur() {
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style.backgroundColor = '';
  }
}
