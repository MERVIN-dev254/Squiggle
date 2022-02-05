import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionsComponent } from './predictions.component';
import { HttpClientModule} from '@angular/common/http'; 

const routes: Routes = [{ path: '', component: PredictionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PredictionsRoutingModule { }
