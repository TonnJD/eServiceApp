import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceSpareListPage } from './device-spare-list.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceSpareListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceSpareListPage]
})
export class DeviceSpareListPageModule {}
