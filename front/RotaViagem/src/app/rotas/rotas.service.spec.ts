import { TestBed } from '@angular/core/testing';

import { coursesService } from './courses.service';

describe('coursesService', () => {
  let service: coursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(coursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
