import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentH } from './list.component';

describe('ListComponent', () => {
  let component: ListComponentH;
  let fixture: ComponentFixture<ListComponentH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponentH]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponentH);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
