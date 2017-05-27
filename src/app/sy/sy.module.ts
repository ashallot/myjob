import { Ym2Component } from './ym2/ym2.component';
import { Ym1Component } from './ym1/ym1.component';
import { syRoutes } from './sy.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(syRoutes),
    MaterialModule,
    MdNativeDateModule
  ],
  declarations: [
    Ym1Component,
    Ym2Component
  ]
})
export class SyModule { }
