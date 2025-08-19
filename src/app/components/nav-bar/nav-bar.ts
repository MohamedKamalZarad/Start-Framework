import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Scroll } from '@angular/router';


@Component({
  selector: 'app-navBar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isScrolled:boolean=false;
  isNotScrolled:boolean=true;
  onScroll():void{
    if (window.scrollY>0) {
      this.isScrolled=true;
      this.isNotScrolled=false;
    }
    else{
      this.isScrolled=false;
      this.isNotScrolled=true;

    }

  }
}

