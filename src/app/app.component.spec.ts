import { TestBed, async, ComponentFixture, getTestBed } from '@angular/core/testing';
import { AppComponent} from './app.component';
import { AppService } from './app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let param: String = 'se19';

  beforeEach(async(() => {
    let injector;
    let service: AppService;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
      providers:[AppService]
    }).compileComponents();

    injector = getTestBed();
    service = injector.get(AppService);
  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should load a restaurant object from using the method', ()=> {
    spyOn(component, 'getRestaurants').and.callThrough();
    component.getRestaurants(param);
    expect(component.restaurants).toBeDefined();
    fixture.detectChanges();
    expect(component.getRestaurants).toHaveBeenCalledTimes(1);
  });
  
});
