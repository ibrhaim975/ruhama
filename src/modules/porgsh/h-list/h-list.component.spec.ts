import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HListComponent } from './h-list.component';

describe('HListComponent', () => {
  let component: HListComponent;
  let fixture: ComponentFixture<HListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
