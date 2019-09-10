import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioGeralPage } from './inicio-geral.page';

describe('InicioGeralPage', () => {
  let component: InicioGeralPage;
  let fixture: ComponentFixture<InicioGeralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioGeralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioGeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
