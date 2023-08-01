import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoomingComponent } from './looming.component';

describe('LoomingComponent', () => {
  let component: LoomingComponent;
  let fixture: ComponentFixture<LoomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoomingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
