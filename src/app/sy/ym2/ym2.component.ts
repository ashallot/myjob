import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ym2-root',
  templateUrl: './ym2.component.html'
})
export class Ym2Component implements OnInit{
  public id:string;
  constructor(){

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
