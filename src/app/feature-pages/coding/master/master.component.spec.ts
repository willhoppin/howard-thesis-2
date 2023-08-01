import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterComponent } from './master.component';

describe('MasterComponent', () => { // Updated describe block to 'MasterComponent'
  let component: MasterComponent; // Updated variable name to 'MasterComponent'
  let fixture: ComponentFixture<MasterComponent>; // Updated variable name to 'MasterComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterComponent], // Updated declaration to 'MasterComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterComponent); // Updated component to 'MasterComponent'
    component = fixture.componentInstance; // Updated component to 'MasterComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
