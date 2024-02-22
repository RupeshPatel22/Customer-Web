import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedyyWalletComponent } from './speedyy-wallet.component';

describe('SpeedyyWalletComponent', () => {
  let component: SpeedyyWalletComponent;
  let fixture: ComponentFixture<SpeedyyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedyyWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedyyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
