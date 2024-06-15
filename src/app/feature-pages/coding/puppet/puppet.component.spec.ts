import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuppetComponent } from './puppet.component';

describe('PuppetComponent', () => { // Updated describe block to 'PuppetComponent'
  let component: PuppetComponent; // Updated variable name to 'PuppetComponent'
  let fixture: ComponentFixture<PuppetComponent>; // Updated variable name to 'PuppetComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuppetComponent], // Updated declaration to 'PuppetComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppetComponent); // Updated component to 'PuppetComponent'
    component = fixture.componentInstance; // Updated component to 'PuppetComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
