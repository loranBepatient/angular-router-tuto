import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrisisCenterComponent } from "./components/crisis-center/crisis-center.component";
import { CrisisListComponent } from "./components/crisis-list/crisis-list.component";
import { CrisisCenterHomeComponent } from "./components/crisis-center-home/crisis-center-home.component";
import { CrisisDetailComponent } from "./components/crisis-detail/crisis-detail.component";

const crisisCenterRoutes: Routes = [
  {
    path: "crisis-center",
    component: CrisisCenterComponent,
    children: [
      {
        path: "",
        component: CrisisListComponent,
        children: [
          { path: "", component: CrisisCenterHomeComponent },
          { path: ":id", component: CrisisDetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {}
