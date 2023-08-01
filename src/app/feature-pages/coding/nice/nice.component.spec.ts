import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiceComponent } from './nice.component';

describe('NiceComponent', () => { // Updated describe block to 'NiceComponent'
  let component: NiceComponent; // Updated variable name to 'NiceComponent'
  let fixture: ComponentFixture<NiceComponent>; // Updated variable name to 'NiceComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NiceComponent], // Updated declaration to 'NiceComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceComponent); // Updated component to 'NiceComponent'
    component = fixture.componentInstance; // Updated component to 'NiceComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
