import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponentH } from "./list/list.component";


@NgModule({
  exports: [
    HeroComponent,
    ListComponentH
  ],
  declarations: [
    HeroComponent,
    ListComponentH
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{

}
