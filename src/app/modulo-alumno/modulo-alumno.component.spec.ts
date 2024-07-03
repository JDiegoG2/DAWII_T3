import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAlumnoComponent } from './modulo-alumno.component';

describe('ModuloAlumnoComponent', () => {
  let component: ModuloAlumnoComponent;
  let fixture: ComponentFixture<ModuloAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
