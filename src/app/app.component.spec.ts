import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TranslateServiceStub {
  public get<T>(key: T): Observable<T> {
    return of(key);
  }
  public onLangChange: EventEmitter<any> = new EventEmitter();
  public onTranslationChange: EventEmitter<any> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<any> = new EventEmitter();

  public getBrowserLang() {
    return 'en';
  }

  public setDefaultLang(langauge: any) {
    return langauge;
  }

  public get currentLang() {
    return 'en';
  }

  public instant() {
    return 'value';
  }

  public use(langauge: any) {
    return langauge;
  }
}
describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
