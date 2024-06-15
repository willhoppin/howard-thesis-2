import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LovemachineComponent } from './lovemachine.component';

describe('LovemachineComponent', () => { // Updated describe block to 'LovemachineComponent'
  let component: LovemachineComponent; // Updated variable name to 'LovemachineComponent'
  let fixture: ComponentFixture<LovemachineComponent>; // Updated variable name to 'LovemachineComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LovemachineComponent], // Updated declaration to 'LovemachineComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LovemachineComponent); // Updated component to 'LovemachineComponent'
    component = fixture.componentInstance; // Updated component to 'LovemachineComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
