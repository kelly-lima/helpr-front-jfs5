import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoComponent } from './cargo/cargo.component';

const routes: Routes = [
  {
    path: '', 
    component: CargoComponent,
    title: "Helpr | Cargos"
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }
