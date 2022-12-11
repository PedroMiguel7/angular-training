import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]',
})
export class HightlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    // this.Renderer.setStyle(
    //   this.ElementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.Renderer.setStyle(
    //   this.ElementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.backgroundColor') get setColor() {
    //codigos extreas
    return this.backgroundColor;
  }

  private backgroundColor: string | undefined;

  // constructor(private ElementRef: ElementRef, private Renderer: Renderer2) {}
}
