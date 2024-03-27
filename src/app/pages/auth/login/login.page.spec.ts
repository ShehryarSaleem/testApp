import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceStub } from 'src/app/app.component.spec';

describe('LoginPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [TranslateModule],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
