import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]',
})
export class HightlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.Renderer.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.Renderer.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      'white'
    );
  }

  constructor(private ElementRef: ElementRef, private Renderer: Renderer2) {}
}
