import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{ path: 'wins', loadChildren: () => import('./wins/wins.module').then(m => m.WinsModule) },
 { path: 'losses', loadChildren: () => import('./losses/losses.module').then(m => m.LossesModule) },
 { path: 'venues', loadChildren: () => import('./venues/venues.module').then(m => m.VenuesModule) },
 { path: 'h2h', loadChildren: () => import('./h2h/h2h.module').then(m => m.H2hModule) },
 { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) },
 { path: 'standings', loadChildren: () => import('./standings/standings.module').then(m => m.StandingsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

