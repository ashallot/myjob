import {
  Component,
  OnInit
} from '@angular/core';
import {
  timeout
} from "rxjs/operator/timeout";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit() {

  }

  items = [{
      source: "assets/img/lunbo3.jpg"
    },
    {
      source: "assets/img/lunbo1.jpg"
    },
    {
      source: "assets/img/lunbo2.jpg"
    },
    {
      source: "assets/img/lunbo3.jpg"
    },
    {
      source: "assets/img/lunbo1.jpg"
    }
  ]
  selectedItem = 1;
  np: number = -1;
  speed: number;
  sum: number;
  pv: number;
  pPV: string;
  prevsrc: string = "assets/img/prev.png";
  nextsrc: string = "assets/img/next.png";

  public setPosition() {
    let positionValue = 1;
    let parsedPositionValue = "";
    if (this.np == 1) {//next
      this.speed = 2;
      this.move = setTimeout(
        () => {
          this.goto();
        }, 0);
      // console.log(this.pPV,'--------return');
      return this.pPV;
    } else if (this.np == 0) {//prev
      this.speed = -2;
      this.move = setTimeout(
        () => {
          this.goto();
        }, 0);
      // console.log(this.pPV);
      return this.pPV;
    } else {
      this.speed = 0;
      positionValue = positionValue * this.selectedItem * 100;
      parsedPositionValue = "-" + positionValue + "%";
      this.pv = positionValue;
      this.sum = this.pv;
      this.pPV = parsedPositionValue;
      return this.pPV;
    }
  }
  public move = setTimeout(
    () => {
      this.goto();
    }, 0);

  public goto() {
    if (this.speed == 0)
      clearTimeout(this.move);
    if (Math.abs(this.sum - this.pv) == 100) {
      clearTimeout(this.move);
      this.pPV = "-" + this.sum + "%";
      this.np = -1;
      return this.pPV;
    }
    if(this.pPV == '-'+(this.items.length - 1)*100+'%' || this.sum == (this.items.length - 1)*100){
      this.pPV = "-100%";
      this.sum = 100;
      this.pv = 100;
    }
    if(this.pPV == '0%' || this.sum == 0){
      this.pPV = '-'+(this.items.length - 2)*100+'%';
      this.sum = (this.items.length - 2)*100;
      this.pv = (this.items.length - 2)*100;
    }
    this.sum += this.speed;
    this.pPV = "-" + this.sum + "%";
      // console.log(this.pPV,'-------------settimeout');
    return this.pPV;
  }


  //   public setPosition(){
  //   let positionValue = 1;
  //   let parsedPositionValue = ""; 
  //   positionValue = positionValue * this.selectedItem * 100;
  //   parsedPositionValue = "-" + positionValue + "%";
  //   return parsedPositionValue;
  // }
  

  // public setItem = (index) => {
  //   if (this.selectedItem === index) return;
  //   this.selectedItem = index;
  //   return  this.selectedItem;
  // }
  public next() {
    this.np = 1;
    if (this.selectedItem === this.items.length - 1)
      return this.selectedItem = 2;
    this.selectedItem = this.selectedItem + 1;
    return this.selectedItem;
  }

  public previous() {
    this.np = 0;
    if (this.selectedItem === 0)
      return this.selectedItem = this.items.length - 3;
    this.selectedItem = this.selectedItem - 1;
    return this.selectedItem;
  }

  public getPanesWidth() {
    let baseWidth = 100;
    let newWidth = '';
    baseWidth = baseWidth * this.items.length;
    newWidth = baseWidth + '%';
    return newWidth;
  }

  public getLiWidth() {
    let baseWidth = 100;
    let newWidth = '';
    baseWidth = baseWidth / this.items.length;
    newWidth = baseWidth + '%';
    return newWidth;
  }

  /**
   * onMouseOver
   */
  public onMouseOverprev() {
    this.prevsrc = "assets/img/prevover.png";
  }
  /**
   * onMouseOut
   */
  public onMouseOutprev() {
    this.prevsrc = "assets/img/prev.png";
  }

  /**
   * onMouseOver
   */
  public onMouseOvernext() {
    this.nextsrc = "assets/img/nextover.png";
  }
  /**
   * onMouseOut
   */
  public onMouseOutnext() {
    this.nextsrc = "assets/img/next.png";
  }


  public autoChange = setInterval(
    ()=>{ 
      this.next();
    }, 2500);

  /**
   * onMouseOverslide
   */
  public onMouseOverslide() {
    clearInterval(this.autoChange);
  }
  /**
   * onMouseOutslide
   */
  public onMouseOutslide() {
    this.autoChange = setInterval(
    ()=>{ 
      this.next();
    }, 2500);
  }
}
