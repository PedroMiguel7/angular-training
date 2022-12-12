import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    //codigos extreas
    return this.backgroundColor;
  }

  private backgroundColor: string | undefined;

  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'yellow';

  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
