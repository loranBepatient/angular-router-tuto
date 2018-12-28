import { Component, OnInit } from "@angular/core";
import { CrisisService } from "../../services/crisis.service";
import { Observable } from "rxjs";
import { Crisis } from "../../models/crisis";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";

@Component({
  selector: "app-crisis-list",
  templateUrl: "./crisis-list.component.html",
  styleUrls: ["./crisis-list.component.css"]
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;
  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params.get("id"));
        this.selectedId = +params.get("id");
        return this.service.getCrises();
      })
    );
  }

  constructor(private service: CrisisService, private route: ActivatedRoute) {}
}
