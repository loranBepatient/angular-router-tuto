import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./components/compose-message/compose-message.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  {
    path: "compose",
    component: ComposeMessageComponent,
    outlet: "popup"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
