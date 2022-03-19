import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPaylComponent } from './pay-payl.component';

describe('PayPaylComponent', () => {
  let component: PayPaylComponent;
  let fixture: ComponentFixture<PayPaylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPaylComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPaylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
