import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  entregas: any[] = [];
 
  constructor() { }

  ngOnInit(): void {
    this.entregas = [
      { ejercicio: 'Master Front End XV - Modulo 1 - Layout - Básico', estado: 'Entregado', fechaEntrega: '06/10/2023', nota: 'Notable', laboratorio: 1 },
      { ejercicio: 'Master Front End XV - Modulo 1 - Layout - Extra', estado: 'Entregado', fechaEntrega: '11/10/2023', nota: 'Sobresaliente', laboratorio: 1 },
      { ejercicio: 'Master Front End XV - Modulo 1 - Layout - Reto', estado: 'Entregado', fechaEntrega: '17/10/2023', nota: 'Sobresaliente', laboratorio: 1 },
      { ejercicio: 'Master Front End XV - Módulo 2 - Lenguajes', estado: 'Entregado', fechaEntrega: '22/11/2023', nota: 'Sobresaliente', laboratorio: 1 },
      { ejercicio: 'Master Front End XV - Módulo 3 - Bundling', estado: 'Entregado', fechaEntrega: '17/11/2023', nota: 'Sobresaliente', laboratorio: 1 },
      { ejercicio: 'Master Front End XV - Módulo 4.1 - Frameworks - React Laboratorio', estado: 'Entregado', fechaEntrega: '22/12/2023', nota: 'Sobresaliente', laboratorio: 1 },
      { ejercicio: 'Master Front End XV - Módulo 4.2 - Frameworks - Angular Laboratorio', estado: 'No entregado', fechaEntrega: '', nota: '', laboratorio: null },
      { ejercicio: 'Master Front End XV - Módulo 4.3 - Frameworks - Vue Laboratorio', estado: 'No entregado', fechaEntrega: '', nota: '', laboratorio: null },
      { ejercicio: 'Master Front End XV - Módulo 5 - Testing Laboratorio', estado: 'Entregado', fechaEntrega: '16/02/2024', nota: '', laboratorio: null }
    ];
  }
}
