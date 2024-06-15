import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmschoolComponent } from './filmschool.component';

describe('FilmschoolComponent', () => { // Updated describe block to 'FilmschoolComponent'
  let component: FilmschoolComponent; // Updated variable name to 'FilmschoolComponent'
  let fixture: ComponentFixture<FilmschoolComponent>; // Updated variable name to 'FilmschoolComponent'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmschoolComponent], // Updated declaration to 'FilmschoolComponent'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmschoolComponent); // Updated component to 'FilmschoolComponent'
    component = fixture.componentInstance; // Updated component to 'FilmschoolComponent'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
