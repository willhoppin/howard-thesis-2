import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageantComponent } from './pageant.component';

describe('PageantComponent', () => { // Updated describe block to 'PageantComponent'
  let component: PageantComponent; // Updated variable name to 'PageantComponent'
  let fixture: ComponentFixture<PageantComponent>; // Updated variable name to 'PageantComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageantComponent], // Updated declaration to 'PageantComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageantComponent); // Updated component to 'PageantComponent'
    component = fixture.componentInstance; // Updated component to 'PageantComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
