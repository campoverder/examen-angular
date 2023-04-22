import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PantallaExamenComponent} from "./pages/pantalla-examen/pantalla-examen.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'examen' },
  { path: 'examen', component: PantallaExamenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
