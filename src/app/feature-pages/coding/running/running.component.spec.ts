import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunningComponent } from './running.component';

describe('RunningComponent', () => { // Updated describe block to 'RunningComponent'
  let component: RunningComponent; // Updated variable name to 'RunningComponent'
  let fixture: ComponentFixture<RunningComponent>; // Updated variable name to 'RunningComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RunningComponent], // Updated declaration to 'RunningComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningComponent); // Updated component to 'RunningComponent'
    component = fixture.componentInstance; // Updated component to 'RunningComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
