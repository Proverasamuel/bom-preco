import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CategoriasComponent {
 mostrarModalCategoria = false;

  abrirModalCategoria() {
    this.mostrarModalCategoria = true;
  }

  fecharModalCategoria() {
    this.mostrarModalCategoria = false;
  }
}
