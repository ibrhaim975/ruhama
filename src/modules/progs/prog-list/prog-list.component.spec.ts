import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgListComponent } from './prog-list.component';

describe('ProgListComponent', () => {
  let component: ProgListComponent;
  let fixture: ComponentFixture<ProgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
