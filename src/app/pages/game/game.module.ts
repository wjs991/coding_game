import { CodingModule } from './coding/coding.module';
import { NgModule } from '@angular/core';
import {GameComponent}from './game.component';

@NgModule({
    imports:[
        CodingModule
    ],
    declarations:[
        GameComponent,
    ],
})
export class GameComponentModule { }