import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]',
})
export class NgElseDirective {
  @Input() set appNgElse(condition: boolean) {
    if (!condition) {
      this.ViewContainerRef.createEmbeddedView(this.TemplateRef);
    } else {
      this.ViewContainerRef.clear();
    }
  }

  constructor(
    private TemplateRef: TemplateRef<any>,
    private ViewContainerRef: ViewContainerRef
  ) {}
}
