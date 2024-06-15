import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recap2024Component } from './recap2024.component';

describe('IcksComponent', () => {
  let component: Recap2024Component;
  let fixture: ComponentFixture<Recap2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Recap2024Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recap2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
