import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembillComponent } from './itembill.component';

describe('ItembillComponent', () => {
  let component: ItembillComponent;
  let fixture: ComponentFixture<ItembillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItembillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItembillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
