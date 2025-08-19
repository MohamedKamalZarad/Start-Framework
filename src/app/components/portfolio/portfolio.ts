import { Component } from '@angular/core';
import { Star } from '../star/star';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [Star, NgClass],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  flag: boolean = true;
  isClicked(): void {
    this.flag = !this.flag;
  }
  isNotClicked(): void {
    this.flag = !this.flag;
  }
  path:Paths[]=[{
    id:1,
   path:"./port1.png "
  },
  {
    id:2,
   path:"./port2.png "
  },
  {
    id:3,
   path:"./port3.png "
  },
  
]

}
interface Paths {
  id: number;
  path:string;
}
