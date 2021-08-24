import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertOldSparepartPage } from './insert-old-sparepart.page';

const routes: Routes = [
  {
    path: '',
    component: InsertOldSparepartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertOldSparepartPage]
})
export class InsertOldSparepartPageModule {}
