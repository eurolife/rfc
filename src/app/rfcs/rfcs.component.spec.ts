/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RFCsComponent } from './rfcs.component';

describe('RFCsComponent', () => {
  let component: RFCsComponent;
  let fixture: ComponentFixture<RFCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
