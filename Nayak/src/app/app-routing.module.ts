import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SALEComponent } from './sale/sale.component';
import { FARMBOXESComponent } from './farmboxes/farmboxes.component';
import { FRUITComponent } from './fruit/fruit.component';
import { MEATComponent } from './meat/meat.component';
import { MILKBARComponent } from './milkbar/milkbar.component';
import { PANTRYESSENTIALSComponent } from './pantryessentials/pantryessentials.component';
import { SEAFOODComponent } from './seafood/seafood.component';
import { VEGETABLESComponent } from './vegetables/vegetables.component';
import { DAIRYComponent } from './dairy/dairy.component';
import { ACAIComponent } from './acai/acai.component';
import { UPGRAINComponent } from './upgrain/upgrain.component';

const routes: Routes = [
 {path:"SALE", component: SALEComponent},
  {path:"FARMBOXES", component: FARMBOXESComponent},
  {path:"FRUIT", component: FRUITComponent},
  {path:"MEAT", component: MEATComponent},
  {path:"MILKBAR", component: MILKBARComponent},
  {path:"PANTRYESSENTIALS", component: PANTRYESSENTIALSComponent},
  {path:"SEAFOOD", component: SEAFOODComponent},
  {path:"UPGRAIN", component: UPGRAINComponent},
  {path:"VEGETABLES", component: VEGETABLESComponent},
  {path:"DAIRY", component: DAIRYComponent},
  {path:"ACAI", component: ACAIComponent},
  
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
