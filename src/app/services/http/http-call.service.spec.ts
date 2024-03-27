import { TestBed, inject } from '@angular/core/testing';
import { HttpCallService } from './http-call.service';
import { AuthService } from '../auth/auth.service';
import { Characters } from '../../interfaces/CharacterInterface';

describe('HttpCallService', () => {
  let service: HttpCallService;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['apiCall']);

    TestBed.configureTestingModule({
      providers: [
        HttpCallService,
        { provide: AuthService, useValue: authSpy }
      ]
    });
    
    service = TestBed.inject(HttpCallService);
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call apiCall method with correct arguments', () => {
    const mockData: Characters[] = [
      { id: 1, firstName: '', lastName: '', fullName: '', title: '', family: '', image: '', imageUrl: '' },
      { id: 2, firstName: '', lastName: '', fullName: '', title: '', family: '', image: '', imageUrl: '' }
    ];
    authServiceSpy.apiCall.and.stub().and.returnValue(Promise.resolve(mockData));

    service.getList().then((data: any) => {
      const charactersData = data as Characters[];
      expect(charactersData).toEqual(mockData);
      expect(authServiceSpy.apiCall).toHaveBeenCalledWith('get', 'v2/Characters', null);
    });
  });

  it('should handle errors from apiCall method', () => {
    const mockError = 'Error message';
    authServiceSpy.apiCall.and.returnValue(Promise.reject(mockError));

    service.getList().catch((error: any) => {
      expect(error).toEqual(mockError);
    });
  });
});
