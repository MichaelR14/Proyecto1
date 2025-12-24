import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { ListarProducto } from './components/listar-producto/listar-producto';
import { CrearProducto } from './components/crear-producto/crear-producto';

const routes: Routes = [
  {path: '', component: ListarProducto},
  {path: 'crear-producto', component: CrearProducto},
  {path: 'editar-producto/:id', component: CrearProducto},
  {path: '**', redirectTo: '', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
