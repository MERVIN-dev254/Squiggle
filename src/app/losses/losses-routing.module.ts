import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LossesComponent } from './losses.component';

const routes: Routes = [{ path: '', component: LossesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossesRoutingModule { }
