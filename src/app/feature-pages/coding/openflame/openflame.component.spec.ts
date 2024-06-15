import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenflameComponent } from './openflame.component';

describe('OpenflameComponent', () => { // Updated describe block to 'OpenflameComponent'
  let component: OpenflameComponent; // Updated variable name to 'OpenflameComponent'
  let fixture: ComponentFixture<OpenflameComponent>; // Updated variable name to 'OpenflameComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenflameComponent], // Updated declaration to 'OpenflameComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenflameComponent); // Updated component to 'OpenflameComponent'
    component = fixture.componentInstance; // Updated component to 'OpenflameComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
