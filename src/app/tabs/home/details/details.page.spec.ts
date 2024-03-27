import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DetailsPage } from './details.page';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateServiceStub } from 'src/app/app.component.spec';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPage],
      imports: [TranslateModule],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
