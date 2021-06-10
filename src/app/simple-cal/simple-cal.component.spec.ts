import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCalComponent } from './simple-cal.component';

describe('SimpleCalComponent', () => {
  let component: SimpleCalComponent;
  let fixture: ComponentFixture<SimpleCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
