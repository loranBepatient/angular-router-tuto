import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { CrisisService } from "../../services/crisis.service";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Crisis } from "../../models/crisis";

@Component({
  selector: "app-crisis-detail",
  templateUrl: "./crisis-detail.component.html",
  styleUrls: ["./crisis-detail.component.css"]
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  constructor(private route: ActivatedRoute, private service: CrisisService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.service.getCrisis(+params.get("id"))
        )
      )
      .subscribe(crisis => {
        this.crisis = crisis;
      });
  }
}
