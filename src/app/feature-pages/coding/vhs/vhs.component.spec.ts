import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VhsComponent } from './vhs.component';

describe('VhsComponent', () => {
  let component: VhsComponent;
  let fixture: ComponentFixture<VhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VhsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
