import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IcksComponent } from './icks.component';

describe('IcksComponent', () => {
  let component: IcksComponent;
  let fixture: ComponentFixture<IcksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
