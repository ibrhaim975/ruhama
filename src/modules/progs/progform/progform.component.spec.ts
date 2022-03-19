import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgformComponent } from './progform.component';

describe('ProgformComponent', () => {
  let component: ProgformComponent;
  let fixture: ComponentFixture<ProgformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
