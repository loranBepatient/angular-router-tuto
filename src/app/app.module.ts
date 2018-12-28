import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { CrisisListComponent } from "./components/crisis-list/crisis-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HeroesModule } from "./heroes/heroes.module";

@NgModule({
  declarations: [AppComponent, CrisisListComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
