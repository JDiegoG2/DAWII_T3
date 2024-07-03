import { ModuloAlumno } from './modulo-alumno.model';

export interface Alumno {
  expediente: number;
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  fechaNac: Date;
  delegado: boolean;
  moduloAlumnos: ModuloAlumno[];
}
