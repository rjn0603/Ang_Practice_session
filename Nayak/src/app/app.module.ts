import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SALEComponent } from './sale/sale.component';
import { FARMBOXESComponent } from './farmboxes/farmboxes.component';
import { FRUITComponent } from './fruit/fruit.component';
import { VEGETABLESComponent } from './vegetables/vegetables.component';
import { MEATComponent } from './meat/meat.component';
import { SEAFOODComponent } from './seafood/seafood.component';
import { PANTRYESSENTIALSComponent } from './pantryessentials/pantryessentials.component';
import { DAIRYComponent } from './dairy/dairy.component';
import { ACAIComponent } from './acai/acai.component';
import { MILKBARComponent } from './milkbar/milkbar.component';
import { UPGRAINComponent } from './upgrain/upgrain.component';

@NgModule({
  declarations: [
    AppComponent,
    SALEComponent,
    FARMBOXESComponent,
    FRUITComponent,
    VEGETABLESComponent,
    MEATComponent,
    SEAFOODComponent,
    PANTRYESSENTIALSComponent,
    DAIRYComponent,
    ACAIComponent,
    MILKBARComponent,
    UPGRAINComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
