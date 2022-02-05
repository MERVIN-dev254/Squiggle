import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { H2hComponent } from './h2h.component';

const routes: Routes = [{ path: '', component: H2hComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class H2hRoutingModule { }
