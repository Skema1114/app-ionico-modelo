import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCepPage } from './home-cep.page';

describe('HomeCepPage', () => {
  let component: HomeCepPage;
  let fixture: ComponentFixture<HomeCepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
