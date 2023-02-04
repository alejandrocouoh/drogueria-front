import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './componente/producto/producto.component';
import { NuevoProductoComponent } from './componente/registrar/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {path: 'nuevo-producto', component: NuevoProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
