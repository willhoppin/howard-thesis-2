import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerComponent } from './her.component';

describe('HerComponent', () => { // Updated describe block to 'HerComponent'
  let component: HerComponent; // Updated variable name to 'HerComponent'
  let fixture: ComponentFixture<HerComponent>; // Updated variable name to 'HerComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerComponent], // Updated declaration to 'HerComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerComponent); // Updated component to 'HerComponent'
    component = fixture.componentInstance; // Updated component to 'HerComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
