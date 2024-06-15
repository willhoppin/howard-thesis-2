import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealfakeComponent } from './realfake.component';

describe('RealfakeComponent', () => { // Updated describe block to 'RealfakeComponent'
  let component: RealfakeComponent; // Updated variable name to 'RealfakeComponent'
  let fixture: ComponentFixture<RealfakeComponent>; // Updated variable name to 'RealfakeComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealfakeComponent], // Updated declaration to 'RealfakeComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealfakeComponent); // Updated component to 'RealfakeComponent'
    component = fixture.componentInstance; // Updated component to 'RealfakeComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
