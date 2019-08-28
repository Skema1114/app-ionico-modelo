import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro-cadeira', pathMatch: 'full' },
  { path: 'cadastro-cadeira', loadChildren: './pages/cadastro-cadeira/cadastro-cadeira.module#CadastroCadeiraPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
