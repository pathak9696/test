import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    FormsModule,
    RouterModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: []
})
export class CoreModule {}
