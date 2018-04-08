import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../@core/data/game.service'
@Component({
    selector: 'game-menu',
    templateUrl: 'game-menu.component.html',
    styleUrls: ['game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {
    title= 'test tour';
    games : any;
    constructor(
        private gameservice : GameService,
    ){

    }
    ngOnInit(){
        this.gameservice.getGames()
        .subscribe((games: any)=>this.games = games);
    }


}
