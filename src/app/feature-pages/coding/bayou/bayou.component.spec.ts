import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BayouComponent } from './bayou.component';

describe('BayouComponent', () => {
  let component: BayouComponent;
  let fixture: ComponentFixture<BayouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BayouComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
