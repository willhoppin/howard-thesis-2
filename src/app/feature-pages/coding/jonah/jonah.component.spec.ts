import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JonahComponent } from './jonah.component';

describe('JonahComponent', () => {
  let component: JonahComponent;
  let fixture: ComponentFixture<JonahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JonahComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JonahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
