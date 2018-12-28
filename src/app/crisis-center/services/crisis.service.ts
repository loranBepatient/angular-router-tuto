import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { MessageService } from "../../common/messages/message.service";
import { Crisis } from "../models/crisis";
import { CRISES } from "../mock-crises";

@Injectable({
  providedIn: "root"
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor(private messageService: MessageService) {}

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = { id: CrisisService.nextCrisisId++, name };
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
