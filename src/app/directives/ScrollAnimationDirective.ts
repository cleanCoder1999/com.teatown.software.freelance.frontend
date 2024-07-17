import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[teatown-scroll-animation-directive]'
})
export class ScrollAnimationDirective {
  elementPosition = 0;
  scrollHeight = 0;
  distance = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.scrollHeight = window.innerHeight;
    this.elementPosition = this.element.nativeElement.getBoundingClientRect().top;
    this.distance = this.elementPosition - this.scrollHeight;

    if (this.distance < 0) {
      this.setStyle();
    }
  }

  setStyle() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      `translateX(${-this.distance / 10}px)`
    );
  }
}
