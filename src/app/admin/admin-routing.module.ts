import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageCrisesComponent } from "./components/manage-crises/manage-crises.component";
import { ManageHeroesComponent } from "./components/manage-heroes/manage-heroes.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AuthGuard } from "../auth/auth.guard";

const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        children: [
          { path: "crises", component: ManageCrisesComponent },
          { path: "heroes", component: ManageHeroesComponent },
          { path: "", component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
