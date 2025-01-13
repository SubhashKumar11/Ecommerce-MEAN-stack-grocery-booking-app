import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemListComponent } from './search-item-list.component';

describe('SearchItemListComponent', () => {
  let component: SearchItemListComponent;
  let fixture: ComponentFixture<SearchItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
