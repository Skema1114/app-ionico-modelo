import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePipesPage } from './home-pipes.page';

describe('HomePipesPage', () => {
  let component: HomePipesPage;
  let fixture: ComponentFixture<HomePipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
