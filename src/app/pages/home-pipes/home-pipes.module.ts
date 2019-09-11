import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePipesPage } from './home-pipes.page';
import { RoundPipe } from 'src/app/pipes/round.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomePipesPage
  }
];

@NgModule({
  // ADICIONADO O REACTIVEFORMSMODULE PRA PODER USAR OS FORMULARIOS, ESSAS SAO IMPORTAÇÕES DA AQUELA TELA
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  // DECLARA O ROUND PIPE (PRA USAR PIPES) PQ TU DIZ QUE VAIU USAR ELE AQUI NESSA PAGINA, E PRECISA SER TIRADO DO APP.MODULE.TS
  declarations: [HomePipesPage, RoundPipe]
})
export class HomePipesPageModule {}
