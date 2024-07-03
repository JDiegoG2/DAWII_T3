import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModuloAlumnoService } from '../modulo-alumno.service';
import { ModuloAlumno } from '../models';

@Component({
  selector: 'app-modulo-alumno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modulo-alumno.component.html',
  styleUrls: ['./modulo-alumno.component.css']
})
export class ModuloAlumnoComponent implements OnInit {
  title = 'Gestión de ModuloAlumno';
  moduloAlumnos: ModuloAlumno[] = [];
  moduloAlumno: ModuloAlumno = {
    idModuloAlumno: 0,
    alumno: {
      expediente: 0,
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      fechaNac: new Date(),
      delegado: false,
      moduloAlumnos: []
    },
    modulo: {
      codigo: 0,
      nombre: '',
      profesor: {
        rfc: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        direccion: '',
        telefono: '',
        modulos: []
      },
      moduloAlumnos: []
    }
  };

  constructor(private moduloAlumnoService: ModuloAlumnoService) { }

  ngOnInit(): void {
    this.getModuloAlumnos();
  }

  getModuloAlumnos(): void {
    this.moduloAlumnoService.getModuloAlumnos().subscribe((data: ModuloAlumno[]) => {
      this.moduloAlumnos = data;
    });
  }

  getModuloAlumno(id: number): void {
    this.moduloAlumnoService.getModuloAlumno(id).subscribe((data: ModuloAlumno) => {
      this.moduloAlumno = data;
    });
  }

  createModuloAlumno(): void {
    this.moduloAlumnoService.createModuloAlumno(this.moduloAlumno).subscribe((data: ModuloAlumno) => {
      this.moduloAlumnos.push(data);
      this.resetForm();
    });
  }

  updateModuloAlumno(id: number): void {
    this.moduloAlumnoService.updateModuloAlumno(id, this.moduloAlumno).subscribe(() => {
      this.getModuloAlumnos();
    });
  }

  deleteModuloAlumno(id: number): void {
    this.moduloAlumnoService.deleteModuloAlumno(id).subscribe(() => {
      this.getModuloAlumnos();
    });
  }

  resetForm(): void {
    this.moduloAlumno = {
      idModuloAlumno: 0,
      alumno: {
        expediente: 0,
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        fechaNac: new Date(),
        delegado: false,
        moduloAlumnos: []
      },
      modulo: {
        codigo: 0,
        nombre: '',
        profesor: {
          rfc: '',
          nombre: '',
          apellidoP: '',
          apellidoM: '',
          direccion: '',
          telefono: '',
          modulos: []
        },
        moduloAlumnos: []
      }
    };
  }

  onSubmit(): void {
    if (this.moduloAlumno.idModuloAlumno === 0) {
      this.createModuloAlumno();
    } else {
      this.updateModuloAlumno(this.moduloAlumno.idModuloAlumno);
    }
  }
}
