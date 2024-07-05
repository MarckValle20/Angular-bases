import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.component';
// Components

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
