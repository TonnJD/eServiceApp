import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestSparepartPage } from './request-sparepart.page';

const routes: Routes = [
  {
    path: '',
    component: RequestSparepartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestSparepartPage]
})
export class RequestSparepartPageModule {}
