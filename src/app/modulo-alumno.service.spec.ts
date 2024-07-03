import { TestBed } from '@angular/core/testing';

import { ModuloAlumnoService } from './modulo-alumno.service';

describe('ModuloAlumnoService', () => {
  let service: ModuloAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuloAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
