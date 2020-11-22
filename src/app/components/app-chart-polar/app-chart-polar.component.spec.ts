/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppChartPolarComponent } from './app-chart-polar.component';

describe('AppChartPolarComponent', () => {
  let component: AppChartPolarComponent;
  let fixture: ComponentFixture<AppChartPolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChartPolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChartPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
