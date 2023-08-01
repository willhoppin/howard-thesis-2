import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChosenComponent } from './chosen.component';

describe('ChosenComponent', () => { // Updated describe block to 'ChosenComponent'
  let component: ChosenComponent; // Updated variable name to 'ChosenComponent'
  let fixture: ComponentFixture<ChosenComponent>; // Updated variable name to 'ChosenComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChosenComponent], // Updated declaration to 'ChosenComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenComponent); // Updated component to 'ChosenComponent'
    component = fixture.componentInstance; // Updated component to 'ChosenComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
