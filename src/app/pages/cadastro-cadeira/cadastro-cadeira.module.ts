import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroCadeiraPage } from './cadastro-cadeira.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCadeiraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroCadeiraPage]
})
export class CadastroCadeiraPageModule {}
