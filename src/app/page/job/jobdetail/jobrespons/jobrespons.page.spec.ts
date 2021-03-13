import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobresponsPage } from './jobrespons.page';

describe('JobresponsPage', () => {
  let component: JobresponsPage;
  let fixture: ComponentFixture<JobresponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobresponsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobresponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
