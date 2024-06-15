import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { AngelComponent } from './feature-pages/coding/angel/angel.component';
import { AdmirerComponent } from './feature-pages/coding/admirer/admirer.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FauxFeatureComponent } from './faux-feature/faux-feature.component';
import { CarmenComponent } from './feature-pages/coding/carmen/carmen.component';
import { CoreComponent } from './feature-pages/coding/core/core.component';
import { CrownedComponent } from './feature-pages/coding/crowned/crowned.component';
import { DivineComponent } from './feature-pages/coding/divine/divine.component';
import { FineComponent } from './feature-pages/coding/fine/fine.component';
import { IcksComponent } from './feature-pages/coding/icks/icks.component';
import { InfluenceComponent } from './feature-pages/coding/influence/influence.component';
import { JonahComponent } from './feature-pages/coding/jonah/jonah.component';
import { KeeperComponent } from './feature-pages/coding/keeper/keeper.component';
import { AboutComponent } from './info-pages/about/about.component';
import { Recap2024Component } from './info-pages/recap2024/recap2024.component';
import { LoomingComponent } from './feature-pages/coding/looming/looming.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    AngelComponent,
    AdmirerComponent,
    NavComponent,
    FooterComponent,
    FauxFeatureComponent,
    CarmenComponent,
    CoreComponent,
    CrownedComponent,
    DivineComponent,
    FineComponent,
    IcksComponent,
    InfluenceComponent,
    JonahComponent,
    KeeperComponent,
    AboutComponent,
    Recap2024Component,
    LoomingComponent,
    SearchingComponent,
    VhsComponent,
    BurnComponent, // New components added below
    ChosenComponent,
    HerComponent,
    HitComponent,
    PotatoComponent,
    ComplicatedComponent,
    MasterComponent,
    NiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
