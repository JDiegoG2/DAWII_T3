import { Rol } from './rol.model';

export interface Usuario {
  id: number;
  username: string;
  password: string;
  isEnabled: boolean;
  isAccountNonExpired: boolean;
  isAccountNonLocked: boolean;
  isCredentialsNonExpired: boolean;
  rols: Rol[];
}
