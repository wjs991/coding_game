import {async,ComponentFixture,TestBed, ComponentFixtureAutoDetect} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import{GameMenuComponent} from './game-menu.component';
import {Codingservice}from '../coding/coding.service';

describe('GameMenuComponent',()=>{
    let component : GameMenuComponent;
    let fixture : ComponentFixture<GameMenuComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let codingservice;
    let codingserviceStub;
    beforeEach(async(()=>{
        codingserviceStub ={
            
        }
        TestBed.configureTestingModule({
            declarations:[GameMenuComponent],
            providers:[{
                provide:ComponentFixtureAutoDetect,Codingservice,
                useValue: true
            }]
        })
        
        fixture = TestBed.createComponent(GameMenuComponent);

        component = fixture.componentInstance;
        //h1엘리먼트 셀렉터!
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

   it('should display original title',()=>{
       
       expect(el.textContent).toContain(component.title);
   });

   it('should display a different test title',()=>{
       component.title = 'test title';
       fixture.detectChanges();
       console.log(component.title);
       expect(el.textContent).toContain('test title');
   });

   it('should still see original title after comp.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    fixture.detectChanges();
    console.log(oldTitle);
    // Displayed title is old because Angular didn't hear the change :(
    expect(el.textContent).toContain('Test Title');
  });

  it('service test',()=>{

  });
})