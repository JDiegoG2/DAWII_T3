import { Permiso } from './permiso.model';
import { RolEnum } from './rol-enum.model';

export interface Rol {
  id: number;
  rolEnum: RolEnum;
  permisos: Permiso[];
}
