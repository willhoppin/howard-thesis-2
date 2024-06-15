import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShepherdComponent } from './shepherd.component';

describe('ShepherdComponent', () => { // Updated describe block to 'ShepherdComponent'
  let component: ShepherdComponent; // Updated variable name to 'ShepherdComponent'
  let fixture: ComponentFixture<ShepherdComponent>; // Updated variable name to 'ShepherdComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShepherdComponent], // Updated declaration to 'ShepherdComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShepherdComponent); // Updated component to 'ShepherdComponent'
    component = fixture.componentInstance; // Updated component to 'ShepherdComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
