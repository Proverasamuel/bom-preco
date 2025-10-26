import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
  
})
export class AdminLayoutComponent {
menusAberto: Record<string, boolean> = {};

 // 🔹 Controla o estado de abertura do sidebar (mobile)
  isSidebarOpen = false;

  // 🔹 Armazena qual submenu está aberto (ex: 'produtos' ou 'config')
  openMenu: string | null = null;

  // 🔹 Alterna o submenu
  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  // 🔹 Verifica se o submenu está aberto
  isOpen(menu: string) {
    return this.openMenu === menu;
  }

  // 🔹 Fecha o sidebar automaticamente em telas pequenas
  closeSidebarOnMobile() {
    if (window.innerWidth < 768) {
      this.isSidebarOpen = false;
    }
  }


}
