import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/public/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'relogios',
        loadComponent: () => import('./pages/public/relogios/relogios.component').then(m => m.RelogiosComponent)
      },
      {
        path: 'perfumes',
        loadComponent: () => import('./pages/public/perfumes/perfumes.component').then(m => m.PerfumesComponent)
      },
      {
        path: 'acessorios',
        loadComponent: () => import('./pages/public/acessorios/acessorios.component').then(m => m.AcessoriosComponent)
      },
      {
        path: 'promocoes',
        loadComponent: () => import('./pages/public/promocoes/promocoes.component').then(m => m.PromocoesComponent)
      },
      {
        path: 'contacto',
        loadComponent: () => import('./pages/public/contacto/contacto.component').then(m => m.ContactoComponent)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'produtos/todos',
        loadComponent: () => import('./pages/admin/produtos/todos/todos.component').then(m => m.TodosComponent)
      },
      {
        path: 'produtos/adicionar',
        loadComponent: () => import('./pages/admin/produtos/add/add.component').then(m => m.AddComponent)
      },
      {
        path: 'produtos/categorias',
        loadComponent: () => import('./pages/admin/produtos/categorias/categorias.component').then(m => m.CategoriasComponent)
      },
      {
        path: 'produtos/inventario',
        loadComponent: () => import('./pages/admin/produtos/inventario/inventario.component').then(m => m.InventarioComponent)
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./pages/admin/pedidos/pedidos.component').then(m => m.PedidosComponent)
      },
      {
        path: 'clientes',
        loadComponent: () => import('./pages/admin/clientes/clientes.component').then(m => m.ClientesComponent)
      },
      {
        path: 'relatorios',
        loadComponent: () => import('./pages/admin/relatorios/relatorios.component').then(m => m.RelatoriosComponent)
      }
    ]
  }
];
