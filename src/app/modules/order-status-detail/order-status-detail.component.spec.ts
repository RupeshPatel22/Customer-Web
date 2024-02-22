import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusDetailComponent } from './order-status-detail.component';

describe('OrderStatusDetailComponent', () => {
  let component: OrderStatusDetailComponent;
  let fixture: ComponentFixture<OrderStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatusDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
