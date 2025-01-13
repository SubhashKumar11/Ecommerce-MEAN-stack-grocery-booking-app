import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticComponent } from './cosmetic.component';

describe('CosmeticComponent', () => {
  let component: CosmeticComponent;
  let fixture: ComponentFixture<CosmeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmeticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
