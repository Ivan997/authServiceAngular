import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { PreciosComponent } from './components/precios/precios.component';
import { PrivadaComponent } from './components/privada/privada.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'privada', component: PrivadaComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
