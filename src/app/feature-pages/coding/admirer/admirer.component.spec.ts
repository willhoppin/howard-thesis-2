import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmirerComponent } from './admirer.component';

describe('AdmirerComponent', () => {
  let component: AdmirerComponent;
  let fixture: ComponentFixture<AdmirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmirerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
