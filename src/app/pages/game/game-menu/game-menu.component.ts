import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../@core/data/game.service'
import {CodingService}from '../../../@core/utils/coding.service'
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
        private codingservice : CodingService
    ){

    }
    ngOnInit(){
        this.gameservice.getGames()
        .subscribe((games: any)=>this.games = games);
    }

    nextCompo(name:any){
        //console.log(name);
        this.codingservice.setTitle(name);
    }


}
