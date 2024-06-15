import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HalffullComponent } from './halffull.component';

describe('HalffullComponent', () => { // Updated describe block to 'HalffullComponent'
  let component: HalffullComponent; // Updated variable name to 'HalffullComponent'
  let fixture: ComponentFixture<HalffullComponent>; // Updated variable name to 'HalffullComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalffullComponent], // Updated declaration to 'HalffullComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalffullComponent); // Updated component to 'HalffullComponent'
    component = fixture.componentInstance; // Updated component to 'HalffullComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
