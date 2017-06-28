// ./app/shared/hidden.directive.ts
import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({ selector: '[myHighlight]' })
// Directive class
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('myHighlight') highlightColor: string;

  @HostListener('click') click() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
/* tslint:disable:member-ordering */
// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[myHighlight]'
// })
// export class HighlightDirective {

//   constructor(private el: ElementRef) { }

//   @Input() defaultColor: string;

//   @Input('myHighlight') highlightColor: string;

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight(this.highlightColor || this.defaultColor || 'red');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(null);
//   }

//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


// import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
// import * as echarts from 'echarts';
// @Directive({
//     selector: 'myHidden'
// })
// export class HiddenDirective implements OnInit {
//     @Input('chartType') chartType: any;

//     constructor(private el: ElementRef) {}

//     public ngOnInit(): void {
//         echarts.init(this.el.nativeElement).setOption(this.chartType);
//     }
// }