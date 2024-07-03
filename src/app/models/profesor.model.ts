import { Modulo } from './modulo.model';

export interface Profesor {
  rfc: string;
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  direccion: string;
  telefono: string;
  modulos: Modulo[];
}
