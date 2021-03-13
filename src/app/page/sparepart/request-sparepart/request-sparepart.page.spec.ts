import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSparepartPage } from './request-sparepart.page';

describe('RequestSparepartPage', () => {
  let component: RequestSparepartPage;
  let fixture: ComponentFixture<RequestSparepartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestSparepartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSparepartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
