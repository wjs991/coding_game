import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

let counter = 0;

@Injectable()
export class GameService {
    private games = [
        {name:'maze',gameImage:'assets/images/maze.png',gameDoc:'미로 풀기!'},
        {name:'rpg',gameImage:'assets/images/tower.jpg',gameDoc:'코딩으로 즐기는 던전 돌파!'},
        {name:'mathalgo',gameImage:'assets/images/algo.jpg',gameDoc:'알고리즘으로 해결해 보자!'}
    ];
    private gameArray:any[];

    constructor() { 
        this.gameArray = Object.values(this.games);
    }
    

    getGames():Observable<any>{
        return Observable.of(this.games);
    }
    getGame():Observable<any>{
        counter = (counter+1)%this.gameArray.length;
        return Observable.of(this.gameArray[counter]);
    }

    getGameArray():Observable<any[]>{
        return Observable.of(this.gameArray);
    }
}