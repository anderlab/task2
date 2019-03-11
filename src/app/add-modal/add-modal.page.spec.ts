import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalPage } from './add-modal.page';

describe('AddModalPage', () => {
  let component: AddModalPage;
  let fixture: ComponentFixture<AddModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
