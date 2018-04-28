import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// containers
import * as fromContainers from './containers';

// Services
import * as fromServices from './services';

// Components
import * as fromComponents from './components';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: fromContainers.EmployeesComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: fromContainers.EmployeeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...fromContainers.containers, ...fromComponents.components, EmployeeFormComponent],
  providers: [...fromServices.services]
})
export class ManageEmployeesModule {}
