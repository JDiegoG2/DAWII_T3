import { Routes } from '@angular/router';
import { ModuloAlumnoComponent } from './modulo-alumno/modulo-alumno.component';

export const routes: Routes = [
  { path: 'modulo-alumno', component: ModuloAlumnoComponent },
  { path: '', redirectTo: '/modulo-alumno', pathMatch: 'full' }
];
