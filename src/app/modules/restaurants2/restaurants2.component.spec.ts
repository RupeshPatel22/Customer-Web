import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurants2Component } from './restaurants2.component';

describe('Restaurants2Component', () => {
  let component: Restaurants2Component;
  let fixture: ComponentFixture<Restaurants2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurants2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restaurants2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
