import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WitheredComponent } from './withered.component';

describe('WitheredComponent', () => { // Updated describe block to 'WitheredComponent'
  let component: WitheredComponent; // Updated variable name to 'WitheredComponent'
  let fixture: ComponentFixture<WitheredComponent>; // Updated variable name to 'WitheredComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WitheredComponent], // Updated declaration to 'WitheredComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitheredComponent); // Updated component to 'WitheredComponent'
    component = fixture.componentInstance; // Updated component to 'WitheredComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
