import { TestBed } from '@angular/core/testing';

import { GetSpecialProductService } from './get-special-product.service';

describe('GetSpecialProductService', () => {
  let service: GetSpecialProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpecialProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
