import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LossesRoutingModule } from './losses-routing.module';
import { LossesComponent } from './losses.component';


@NgModule({
  declarations: [
    LossesComponent
  ],
  imports: [
    CommonModule,
    LossesRoutingModule
  ]
})
export class LossesModule { }
