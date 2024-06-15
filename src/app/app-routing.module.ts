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
import { AboutComponent } from './info-pages/about/about.component';
import { Recap2024Component } from './info-pages/recap2024/recap2024.component';
import { SearchingComponent } from './feature-pages/coding/searching/searching.component';
import { VhsComponent } from './feature-pages/coding/vhs/vhs.component';
import { BurnComponent } from './feature-pages/coding/burn/burn.component';
import { ChosenComponent } from './feature-pages/coding/chosen/chosen.component';
import { HerComponent } from './feature-pages/coding/her/her.component';
import { HitComponent } from './feature-pages/coding/hit/hit.component';
import { PotatoComponent } from './feature-pages/coding/potato/potato.component';
import { ComplicatedComponent } from './feature-pages/coding/complicated/complicated.component';
import { MasterComponent } from './feature-pages/coding/master/master.component';
import { NiceComponent } from './feature-pages/coding/nice/nice.component';
import { RunningComponent } from './feature-pages/coding/running/running.component';
import { ButterfliesComponent } from './feature-pages/coding/butterflies/butterflies.component';
import { ShepherdComponent } from './feature-pages/coding/shepherd/shepherd.component';
import { HagComponent } from './feature-pages/coding/hag/hag.component';
import { FilmschoolComponent } from './feature-pages/coding/filmschool/filmschool.component';
import { LovemachineComponent } from './feature-pages/coding/lovemachine/lovemachine.component';
import { RubberComponent } from './feature-pages/coding/rubber/rubber.component';
import { SanctuaryComponent } from './feature-pages/coding/sanctuary/sanctuary.component';
import { SeasonsComponent } from './feature-pages/coding/seasons/seasons.component';
import { PageantComponent } from './feature-pages/coding/pageant/pageant.component';
import { BayouComponent } from './feature-pages/coding/bayou/bayou.component';
import { PuppetComponent } from './feature-pages/coding/puppet/puppet.component';
import { HalffullComponent } from './feature-pages/coding/halffull/halffull.component';
import { EmberComponent } from './feature-pages/coding/ember/ember.component';
import { WitheredComponent } from './feature-pages/coding/withered/withered.component';
import { OpenflameComponent } from './feature-pages/coding/openflame/openflame.component';
import { RealfakeComponent } from './feature-pages/coding/realfake/realfake.component';

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
  { path: 'about', component: AboutComponent },
  { path: 'recap2024', component: Recap2024Component },
  { path: 'looming', component: LoomingComponent },
  { path: 'searching', component: SearchingComponent },
  { path: 'vhs', component: VhsComponent },
  { path: 'burn', component: BurnComponent },
  { path: 'chosen', component: ChosenComponent },
  { path: 'her', component: HerComponent },
  { path: 'hit', component: HitComponent },
  { path: 'potato', component: PotatoComponent },
  { path: 'complicated', component: ComplicatedComponent },
  { path: 'master', component: MasterComponent },
  { path: 'nice', component: NiceComponent },
  { path: 'running', component: RunningComponent },
  { path: 'butterflies', component: ButterfliesComponent },
  { path: 'shepherd', component: ShepherdComponent },
  { path: 'hag', component: HagComponent },
  { path: 'filmschool', component: FilmschoolComponent },
  { path: 'lovemachine', component: LovemachineComponent },
  { path: 'rubber', component: RubberComponent },
  { path: 'sanctuary', component: SanctuaryComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: 'pageant', component: PageantComponent },
  { path: 'bayou', component: BayouComponent },
  { path: 'puppet', component: PuppetComponent },
  { path: 'halffull', component: HalffullComponent },
  { path: 'ember', component: EmberComponent },
  { path: 'withered', component: WitheredComponent },
  { path: 'openflame', component: OpenflameComponent },
  { path: 'realfake', component: RealfakeComponent },
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
