import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RubberComponent } from './rubber.component';

describe('RubberComponent', () => { // Updated describe block to 'RubberComponent'
  let component: RubberComponent; // Updated variable name to 'RubberComponent'
  let fixture: ComponentFixture<RubberComponent>; // Updated variable name to 'RubberComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RubberComponent], // Updated declaration to 'RubberComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubberComponent); // Updated component to 'RubberComponent'
    component = fixture.componentInstance; // Updated component to 'RubberComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
