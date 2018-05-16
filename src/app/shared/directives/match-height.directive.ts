import { Directive, Input, ElementRef, AfterViewChecked, HostListener } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

  @Input() matchHeight: string;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked(): void {
    this.matchTheHeight(this.el.nativeElement, this.matchHeight);
  }

  @HostListener('window:resize')
  onResize() {
      this.matchTheHeight(this.el.nativeElement, this.matchHeight);
  }

  matchTheHeight(parent: HTMLElement, className: string) {

    if (!parent) {
      return;
    }

    const children = parent.getElementsByClassName(className);

    if (!children) {
      return;
    }

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    const itemHeights = Array.from(children).map( x => x.getBoundingClientRect().height );

    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children)
      .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
  }

}
