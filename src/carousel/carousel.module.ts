import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel.component";
import { ScrollDirective } from "./carousel.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    ScrollDirective
  ],
  exports:[
    CarouselComponent,
    ScrollDirective
  ]
})
export class CarouselModule { }
