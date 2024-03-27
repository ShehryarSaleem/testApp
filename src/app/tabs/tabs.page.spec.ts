import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceStub } from '../app.component.spec';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPage],
      imports: [TranslateModule],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
