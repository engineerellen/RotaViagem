import { TestBed } from '@angular/core/testing';

import { rotasService } from './rotas.service';

describe('rotasService', () => {
  let service: rotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(rotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
