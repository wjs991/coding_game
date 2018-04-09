import { Component } from '@angular/core';
import {NbSidebarService}from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout  >
      <nb-menu [items]="menu" (click)='over()'></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  over_mouse: boolean =false;

  constructor(private sidebarService: NbSidebarService){

  }
  over(){
    if(this.over_mouse === false){
      this.sidebarService.toggle(true,'menu-sidebar');
    
    console.log("mouse");
    this.over_mouse = true;
    }
    else{
      this.sidebarService.toggle(true,'menu-sidebar');
    
    console.log("mouse");
    this.over_mouse = false;
    }
    return false;
  }

 
}
