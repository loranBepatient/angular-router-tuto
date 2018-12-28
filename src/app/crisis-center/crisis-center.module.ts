import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CrisisListComponent } from "./components/crisis-list/crisis-list.component";
import { CrisisCenterComponent } from "./components/crisis-center/crisis-center.component";
import { CrisisCenterHomeComponent } from "./components/crisis-center-home/crisis-center-home.component";
import { CrisisRoutingModule } from "./crisis-center-routing.module";
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [CommonModule, FormsModule, CrisisRoutingModule]
})
export class CrisisCenterModule {}
