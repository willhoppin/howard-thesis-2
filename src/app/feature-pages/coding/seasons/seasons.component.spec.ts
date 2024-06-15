import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeasonsComponent } from './seasons.component';

describe('SeasonsComponent', () => { // Updated describe block to 'SeasonsComponent'
  let component: SeasonsComponent; // Updated variable name to 'SeasonsComponent'
  let fixture: ComponentFixture<SeasonsComponent>; // Updated variable name to 'SeasonsComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonsComponent], // Updated declaration to 'SeasonsComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent); // Updated component to 'SeasonsComponent'
    component = fixture.componentInstance; // Updated component to 'SeasonsComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
