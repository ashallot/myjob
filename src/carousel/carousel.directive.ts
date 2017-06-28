import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

// Directive decorator
@Directive({ selector: '[scrollleft]' })
// Directive class
export class ScrollDirective {

  constructor(private el: ElementRef,private renderer:Renderer) { }

  @Input('scrollleft') left: string;

  @HostListener('checking') checking() {
      this.check;
  }

  public check = setInterval(
    ()=>{ 
      this.scrollleft(this.el.nativeElement.style.left);
    }, 10);

  private scrollleft(value: string) {
        // this.renderer.setElementClass(this.el.nativeElement,"addpanes",true);
    if(value == "0%"){
        // this.renderer.setElementClass(this.el.nativeElement,"addpanes",false);
        this.el.nativeElement.style.left = "-300%";
    }else if(value == "-400%"){
        // this.renderer.setElementClass(this.el.nativeElement,"addpanes",false);
        this.el.nativeElement.style.left = "-100%";
    }
  }
}
