import { Profesor } from './profesor.model';
import { ModuloAlumno } from './modulo-alumno.model';

export interface Modulo {
  codigo: number;
  nombre: string;
  profesor: Profesor;
  moduloAlumnos: ModuloAlumno[];
}
