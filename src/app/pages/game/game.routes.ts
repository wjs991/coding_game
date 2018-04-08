import { Routes } from '@angular/router';
import {CodingComponent}from './coding/coding.component'
import { GameMenuComponent } from './game-menu/game-menu.component';

export const GameRoutes: Routes =[
    {
        path:'coding',component:CodingComponent
    },
    {
        path:'game-menu',component:GameMenuComponent
    }

];