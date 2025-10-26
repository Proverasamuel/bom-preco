import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  // --- ROTAS PÚBLICAS ---
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/public/home/home.component').then(m => m.HomeComponent),
        title: 'Início'
      },
      {
        path: 'relogios',
        loadComponent: () =>
          import('./pages/public/relogios/relogios.component').then(m => m.RelogiosComponent),
        title: 'Relógios'
      },
      {
        path: 'perfumes',
        loadComponent: () =>
          import('./pages/public/perfumes/perfumes.component').then(m => m.PerfumesComponent),
        title: 'Perfumes'
      },
      {
        path: 'acessorios',
        loadComponent: () =>
          import('./pages/public/acessorios/acessorios.component').then(m => m.AcessoriosComponent),
        title: 'Acessórios'
      },
      {
        path: 'promocoes',
        loadComponent: () =>
          import('./pages/public/promocoes/promocoes.component').then(m => m.PromocoesComponent),
        title: 'Promoções'
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/public/contacto/contacto.component').then(m => m.ContactoComponent),
        title: 'Contacto'
      }
    ]
  },

  // --- ROTAS ADMIN ---
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Dashboard'
      },
      {
        path: 'produtos',
        children: [
          {
            path: 'todos',
            loadComponent: () =>
              import('./pages/admin/produtos/todos/todos.component').then(m => m.TodosComponent),
            title: 'Todos os produtos'
          },
          {
            path: 'adicionar',
            loadComponent: () =>
              import('./pages/admin/produtos/add/add.component').then(m => m.AddComponent),
            title: 'Adicionar produto'
          },
          {
            path: 'categorias',
            loadComponent: () =>
              import('./pages/admin/produtos/categorias/categorias.component').then(m => m.CategoriasComponent),
            title: 'Categorias'
          },
          {
            path: 'inventario',
            loadComponent: () =>
              import('./pages/admin/produtos/inventario/inventario.component').then(m => m.InventarioComponent),
            title: 'Inventário'
          }
        ]
      },
      {
        path: 'pedidos',
        loadComponent: () =>
          import('./pages/admin/pedidos/pedidos.component').then(m => m.PedidosComponent),
        title: 'Pedidos'
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./pages/admin/clientes/clientes.component').then(m => m.ClientesComponent),
        title: 'Clientes'
      },
      {
        path: 'relatorios',
        loadComponent: () =>
          import('./pages/admin/relatorios/relatorios.component').then(m => m.RelatoriosComponent),
        title: 'Relatórios'
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/admin/not-found-admin/not-found-admin.component').then(m => m.NotFoundAdminComponent),
        title: 'Página não encontrada'
      }
    ]
  },

  // --- CATCH-ALL GLOBAL (tem que ser o último) ---
  {
    path: '**',
    loadComponent: () =>
      import('./pages/public/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Página não encontrada',
    pathMatch: 'full'
  }
];
