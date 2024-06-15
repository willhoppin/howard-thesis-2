import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HagComponent } from './hag.component';

describe('HagComponent', () => { // Updated describe block to 'HagComponent'
  let component: HagComponent; // Updated variable name to 'HagComponent'
  let fixture: ComponentFixture<HagComponent>; // Updated variable name to 'HagComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HagComponent], // Updated declaration to 'HagComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HagComponent); // Updated component to 'HagComponent'
    component = fixture.componentInstance; // Updated component to 'HagComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
