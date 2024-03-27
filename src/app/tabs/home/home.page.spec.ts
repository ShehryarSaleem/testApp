import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HomePage } from './home.page';
import { NavController, ActionSheetController } from '@ionic/angular';
import { HttpCallService } from 'src/app/services/http/http-call.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let httpCallServiceSpy: jasmine.SpyObj<HttpCallService>;
  let actionSheetCtrlSpy: jasmine.SpyObj<ActionSheetController>;

  beforeEach(async(() => {
    const navSpy = jasmine.createSpyObj('NavController', ['navigateForward', 'navigateRoot']);
    const httpCallService = jasmine.createSpyObj('HttpCallService', ['getList']);
    const actionSheetCtrlSpyObj = jasmine.createSpyObj('ActionSheetController', ['create']);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        { provide: NavController, useValue: navSpy },
        { provide: HttpCallService, useValue: httpCallService },
        { provide: ActionSheetController, useValue: actionSheetCtrlSpyObj },
        UtilsService
      ]
    }).compileComponents();

    navCtrlSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
    httpCallServiceSpy = TestBed.inject(HttpCallService) as jasmine.SpyObj<HttpCallService>;
    actionSheetCtrlSpy = TestBed.inject(ActionSheetController) as jasmine.SpyObj<ActionSheetController>;

    // Set up spy behavior
    httpCallServiceSpy.getList.and.stub().and.returnValue(Promise.resolve([]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('hould populate charactersList with 53 characters on initialization', async () => {

    const mockCharactersList = new Array(53).fill({ id: 1, name: 'Character' });
    httpCallServiceSpy.getList.and.stub().and.returnValue(Promise.resolve(mockCharactersList));
    await component.ngOnInit();
    expect(component.charactersList?.length).toBe(53);
  });

  it('should navigate to details page with character', () => {
    const character = {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
      fullName: 'First Last',
      title: 'Title',
      family: 'Family',
      image: 'Image',
      imageUrl: 'ImageUrl'
    };

    component.detail(character);

    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['tabs/home/details'], {
      state: { character }
    });
  });

});
