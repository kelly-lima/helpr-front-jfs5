import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '',
   component: HomeComponent,
   canActivate: [ AuthGuard ],
   title: "Helpr | Página Principal"
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
