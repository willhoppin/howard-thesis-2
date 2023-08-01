import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrownedComponent } from './crowned.component';

describe('CrownedComponent', () => {
  let component: CrownedComponent;
  let fixture: ComponentFixture<CrownedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrownedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
