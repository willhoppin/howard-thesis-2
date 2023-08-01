import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplicatedComponent } from './complicated.component';

describe('ComplicatedComponent', () => { // Updated describe block to 'ComplicatedComponent'
  let component: ComplicatedComponent; // Updated variable name to 'ComplicatedComponent'
  let fixture: ComponentFixture<ComplicatedComponent>; // Updated variable name to 'ComplicatedComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplicatedComponent], // Updated declaration to 'ComplicatedComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplicatedComponent); // Updated component to 'ComplicatedComponent'
    component = fixture.componentInstance; // Updated component to 'ComplicatedComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
