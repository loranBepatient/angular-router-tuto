import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Hero } from "../models/hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "../../common/messages/message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero["id"] === id));
  }
}
