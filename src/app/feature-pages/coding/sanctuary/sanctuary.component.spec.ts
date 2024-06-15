import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanctuaryComponent } from './sanctuary.component';

describe('SanctuaryComponent', () => { // Updated describe block to 'SanctuaryComponent'
  let component: SanctuaryComponent; // Updated variable name to 'SanctuaryComponent'
  let fixture: ComponentFixture<SanctuaryComponent>; // Updated variable name to 'SanctuaryComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanctuaryComponent], // Updated declaration to 'SanctuaryComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctuaryComponent); // Updated component to 'SanctuaryComponent'
    component = fixture.componentInstance; // Updated component to 'SanctuaryComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
