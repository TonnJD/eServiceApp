import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOldSparepartPage } from './insert-old-sparepart.page';

describe('InsertOldSparepartPage', () => {
  let component: InsertOldSparepartPage;
  let fixture: ComponentFixture<InsertOldSparepartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOldSparepartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOldSparepartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
