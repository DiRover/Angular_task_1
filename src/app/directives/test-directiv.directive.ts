import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestDirectiv]'
})
export class TestDirectivDirective {
  @Input('appTestDirectiv') color: string | undefined;
  @Input() dStyle: {border: string} | undefined;

  @HostBinding('style.background-color') bgColor: string | null = null; //еще один способ байдинга для получения доступа к аттрибутам
  
  

  constructor(private elRef: ElementRef, private render: Renderer2 ) { //надо обязательно указывать тип поля, по другому не сработает
    // this.elRef.nativeElement.style.color = 'blue' - обычный способ получить св-ва эл-та
    this.render.setStyle(this.elRef.nativeElement, 'color', this.color) // более универсальный, для работы на многих платформах

    
  }

  @HostListener('mouseenter', ['$event']) onEnter(event: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'font-size', '2rem');
    this.render.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.render.setStyle(this.elRef.nativeElement, 'border', this.dStyle?.border);
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave', ['$event']) onLeave(event: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'font-size', '1rem')
    this.render.setStyle(this.elRef.nativeElement, 'color', null);
    this.render.setStyle(this.elRef.nativeElement, 'border', null);
    this.bgColor = null;
  }

}
