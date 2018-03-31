import { Component } from '@angular/core';
import{UtilService} from '../../../@core/utils/util.service';
import {CodingService}from '../../../@core/utils/coding.service';
import {Code}from '../../../@core/data/code';
import { TerminalBuffer, keyMap } from 'ng-terminal';

import 'brace/index';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/mode/typescript';
import 'brace/theme/eclipse';
import 'brace/mode/c_cpp';
import 'brace/mode/java';
import 'brace/ext/language_tools.js'
declare var ace : any;

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'coding',
    templateUrl: 'coding.component.html'
})

export class CodingComponent {
    code: Code = new Code();
    text: string = "";
    public editor;

    private default_options:any={
        mode:'ace/mode/javascript'
    }

    private C_CPP_options:any={
        mode:'ace/mode/c_cpp'
    }

    private JAVA_options:any={
        mode:'ace/mode/java'
    }

    constructor(
        private codingservice : CodingService
    ){

        this.code.gameName="defualt";
    }

    ngOnInit(){
        this.text = "//insert";
    }

    ngAfterViewInit(){
        this.editor = ace.edit('editor');
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setTheme('ace/theme/monokai');        
        //this.editor.setOptions(this.default_options);
        this.editor.clearSelection();
    }

    onClick(){
        console.log("C언어");
        this.editor.getSession().setMode('ace/mode/c_cpp');
        //this.editor.setOptions(this.C_CPP_options);
        this.text ="";
        this.code.mode ="c_cpp";
    }
    onCCclick(){
        console.log("java");
        this.editor.getSession().setMode('ace/mode/java');
        //this.editor.setOptions(this.JAVA_options);
        this.text = "";
        this.code.mode="java";
    }

    submit(){
        console.log(this.code);
        this.codingservice.push(this.code,"test")
        .then(code =>{
            console.log(code.raw);
            this.bf.write(code.raw);
        });//나중에 username도 받아와야함
       
    }
    onChange(tttt){
        console.log("sss",tttt);
        this.code.code = tttt;
    }
    /////////////////////////terminal
    public bf: TerminalBuffer;
    public testbf: TerminalBuffer = new TerminalBuffer();
    onInit(bf: TerminalBuffer) {
        this.bf = bf;
    }
    onCCC(ttt){
        console.log(ttt);
    }
    onKey(e: KeyboardEvent) {
       //console.log("event.type " + e.type + ":" + e.key);
       if (e.key == 'Enter') {
        this.bf.write(keyMap.Linefeed);
      
    } else if (e.key == 'Backspace') {
        this.bf.write(keyMap.BackSpace);
    } else if (e.key == 'ArrowLeft') {
        this.bf.write(keyMap.ArrowLeft);
    } else if (e.key == 'ArrowRight') {
        this.bf.write(keyMap.ArrowRight);
    } else if (e.key == 'ArrowUp') {
        this.bf.write(keyMap.ArrowUp);
    } else if (e.key == 'ArrowDown') {
        this.bf.write(keyMap.ArrowDown);
    } else if (e.key == 'Delete') {
        this.bf.write(keyMap.Delete);
    } else if (e.key == 'Home') {
        this.bf.write(keyMap.KeyHome);
    } else if (e.key == 'End') {
        this.bf.write(keyMap.KeyEnd);
    } else if (e.key == 'Tab') {
        this.bf.write(keyMap.Tab);
    } else if (e.key == 'Insert') {
        this.bf.write(keyMap.Insert);
    } else if (e.type == 'compositionstart') {
        this.bf.write(' ');
    } else if (e.type == 'compositionupdate' && e.key.length == 1) {
        if (this.bf.isInsertMode()) {
            this.bf.write('\b');
            this.bf.write(e.key);
        } else {
            this.bf.write(keyMap.ArrowLeft);
            this.bf.write(e.key);
        }
    } else if (e.type == 'compositionend' && e.key.length == 1) {
        if (e.key < '\u007f') { //ignore writing low unicode key in mobile. It should be written in textInput event
            if (this.bf.isInsertMode())
                this.bf.write('\b');
            else
                this.bf.write(keyMap.ArrowLeft);
        } else if (this.bf.isInsertMode()) {
            this.bf.write('\b');
            this.bf.write(e.key);
        } else {
            this.bf.write(keyMap.ArrowLeft);
            this.bf.write(e.key);
        }
    } else
        if (e.key.length == 1)
            this.bf.write(e.key + '');
    }



}
