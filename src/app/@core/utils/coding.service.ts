//TODO: 서비스 제작하기!!!

import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { UtilService } from './util.service';
import { ApiResponse } from './api-response';
import {Code}from '../data/code';
const options = {
    responseType: 'json' as 'json'};
    
    
class Game{
        title : string;
        Doc : string;
        Code : string;
        score : number;
        //etc
}

@Injectable()
export class CodingService{
    private apiBaseUrl = `${environment.apiBaseUrl}/game`;
    private game: Game = new Game;
    constructor(
        
        private http:HttpClient,
        private utilService: UtilService,
       
    ){

    }

    setTitle(gametitle: any) {
        console.log("ssss");
        this.game.title= gametitle;
        console.log(this.game);
        
    }
    getTitle(){
        return this.game.title;
    }

    //TODO: 코딩된 파일 보내기 (현재 mode와 파일 한번에)
    push(code: Code,username:String):Promise<any>{
        return this.http.post<ApiResponse>(`${this.apiBaseUrl}/${username}`,code,options)
        .toPromise()
        .then(response =>{
            console.log("angular2 = ",response);
            return response;
        })
        .catch(err =>{
            console.log(err);
        });
    }

    //TODO: 코딩된 결과 받아오기             
}