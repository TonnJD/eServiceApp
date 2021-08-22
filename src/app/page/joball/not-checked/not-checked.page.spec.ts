import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCheckedPage } from './not-checked.page';

describe('NotCheckedPage', () => {
  let component: NotCheckedPage;
  let fixture: ComponentFixture<NotCheckedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotCheckedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotCheckedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
