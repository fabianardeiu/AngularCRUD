/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CreateEmployeeComponent } from './create-employee.component';

let component: CreateEmployeeComponent;
let fixture: ComponentFixture<CreateEmployeeComponent>;

describe('create-employee component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateEmployeeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CreateEmployeeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});