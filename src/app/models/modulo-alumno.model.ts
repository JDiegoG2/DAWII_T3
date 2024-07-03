import { Alumno } from './alumno.model';
import { Modulo } from './modulo.model';

export interface ModuloAlumno {
  idModuloAlumno: number;
  alumno: Alumno;
  modulo: Modulo;
}
