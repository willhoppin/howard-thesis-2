import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngelComponent } from './feature-pages/coding/angel/angel.component';
import { AdmirerComponent } from './feature-pages/coding/admirer/admirer.component';
import { HomeComponent } from './home/home.component';
import { CarmenComponent } from './feature-pages/coding/carmen/carmen.component';
import { CoreComponent } from './feature-pages/coding/core/core.component';
import { CrownedComponent } from './feature-pages/coding/crowned/crowned.component';
import { DivineComponent } from './feature-pages/coding/divine/divine.component';
import { FineComponent } from './feature-pages/coding/fine/fine.component';
import { IcksComponent } from './feature-pages/coding/icks/icks.component';
import { InfluenceComponent } from './feature-pages/coding/influence/influence.component';
import { JonahComponent } from './feature-pages/coding/jonah/jonah.component';
import { KeeperComponent } from './feature-pages/coding/keeper/keeper.component';
import { LoomingComponent } from './feature-pages/coding/looming/looming.component';
import { SearchingComponent } from './feature-pages/coding/searching/searching.component';
import { VhsComponent } from './feature-pages/coding/vhs/vhs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angel', component: AngelComponent },
  { path: 'admirer', component: AdmirerComponent },
  { path: 'carmen', component: CarmenComponent },
  { path: 'core', component: CoreComponent },
  { path: 'crowned', component: CrownedComponent },
  { path: 'divine', component: DivineComponent },
  { path: 'fine', component: FineComponent },
  { path: 'icks', component: IcksComponent },
  { path: 'influence', component: InfluenceComponent },
  { path: 'jonah', component: JonahComponent },
  { path: 'keeper', component: KeeperComponent },
  { path: 'looming', component: LoomingComponent },
  { path: 'searching', component: SearchingComponent },
  { path: 'vhs', component: VhsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { scrollPositionRestoration: 'enabled' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
