import { NgModule } from '@angular/core';
import {GameComponent}from './game.component';
import { ThemeModule } from '../../@theme/theme.module';
import {DataModule} from '../../@core/data/data.module'
import { AceEditorModule } from 'ng2-ace-editor';
import {CodingComponent} from './coding/coding.component'
import { GameMenuComponent } from './game-menu/game-menu.component';
import { GameRoutes } from './game.routes';
import { RouterModule } from '@angular/router';


@NgModule({
    imports:[
        ThemeModule,
        DataModule,
        AceEditorModule,
        //GameRoutes,
        RouterModule,
    ],
    declarations:[
        GameComponent,
        GameMenuComponent,
        CodingComponent
    ],
})
export class GameComponentModule { }