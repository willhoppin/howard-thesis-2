import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HitComponent } from './hit.component';

describe('HitComponent', () => { // Updated describe block to 'HitComponent'
  let component: HitComponent; // Updated variable name to 'HitComponent'
  let fixture: ComponentFixture<HitComponent>; // Updated variable name to 'HitComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HitComponent], // Updated declaration to 'HitComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitComponent); // Updated component to 'HitComponent'
    component = fixture.componentInstance; // Updated component to 'HitComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
