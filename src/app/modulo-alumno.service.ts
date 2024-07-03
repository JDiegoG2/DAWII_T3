import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuloAlumno } from './models'; 

@Injectable({
  providedIn: 'root'
})
export class ModuloAlumnoService {
  private apiUrl = 'http://localhost:9093/api/moduloalumnos'; 

  constructor(private http: HttpClient) { }

  getModuloAlumnos(): Observable<ModuloAlumno[]> {
    return this.http.get<ModuloAlumno[]>(`${this.apiUrl}/all`);
  }

  getModuloAlumno(id: number): Observable<ModuloAlumno> {
    return this.http.get<ModuloAlumno>(`${this.apiUrl}/${id}`);
  }

  createModuloAlumno(moduloAlumno: ModuloAlumno): Observable<ModuloAlumno> {
    return this.http.post<ModuloAlumno>(`${this.apiUrl}/create`, moduloAlumno);
  }

  updateModuloAlumno(id: number, moduloAlumno: ModuloAlumno): Observable<ModuloAlumno> {
    return this.http.put<ModuloAlumno>(`${this.apiUrl}/update/${id}`, moduloAlumno);
  }

  deleteModuloAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
