import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasalaComponent } from './masala.component';

describe('MasalaComponent', () => {
  let component: MasalaComponent;
  let fixture: ComponentFixture<MasalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
