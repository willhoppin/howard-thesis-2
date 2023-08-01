import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotatoComponent } from './potato.component';

describe('PotatoComponent', () => { // Updated describe block to 'PotatoComponent'
  let component: PotatoComponent; // Updated variable name to 'PotatoComponent'
  let fixture: ComponentFixture<PotatoComponent>; // Updated variable name to 'PotatoComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PotatoComponent], // Updated declaration to 'PotatoComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoComponent); // Updated component to 'PotatoComponent'
    component = fixture.componentInstance; // Updated component to 'PotatoComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
