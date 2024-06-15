import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmberComponent } from './ember.component';

describe('EmberComponent', () => { // Updated describe block to 'EmberComponent'
  let component: EmberComponent; // Updated variable name to 'EmberComponent'
  let fixture: ComponentFixture<EmberComponent>; // Updated variable name to 'EmberComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmberComponent], // Updated declaration to 'EmberComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmberComponent); // Updated component to 'EmberComponent'
    component = fixture.componentInstance; // Updated component to 'EmberComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
