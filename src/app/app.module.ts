import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// App components
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

// App Modules
import { HeroesModule } from "./heroes/heroes.module";
import { CrisisCenterModule } from "./crisis-center/crisis-center.module";
import { ComposeMessageComponent } from "./components/compose-message/compose-message.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
