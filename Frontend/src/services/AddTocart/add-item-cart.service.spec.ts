import { TestBed } from '@angular/core/testing';

import { AddItemCartService } from './add-item-cart.service';

describe('AddItemCartService', () => {
  let service: AddItemCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddItemCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
