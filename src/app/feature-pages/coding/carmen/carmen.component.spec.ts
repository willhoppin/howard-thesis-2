import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarmenComponent } from './carmen.component';

describe('CarmenComponent', () => {
  let component: CarmenComponent;
  let fixture: ComponentFixture<CarmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarmenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
