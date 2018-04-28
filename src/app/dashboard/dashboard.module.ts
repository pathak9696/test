import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

// containers
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...fromContainers.containers]
})
export class DashboardModule {}
