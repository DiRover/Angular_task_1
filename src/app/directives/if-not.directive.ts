import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// структурная директива

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  @Input('appIfNot') set ifNot(condition: boolean) { //в зависимости от условия показываем или нет компонент
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>, //эти данные обязательно нужно указывать
    private viewContainer: ViewContainerRef
  ) {}
}
