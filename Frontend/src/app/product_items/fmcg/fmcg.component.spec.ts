import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmcgComponent } from './fmcg.component';

describe('FmcgComponent', () => {
  let component: FmcgComponent;
  let fixture: ComponentFixture<FmcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmcgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
