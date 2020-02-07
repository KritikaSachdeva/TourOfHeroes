import { HeroHelperService } from "./../../shared/services/hero-helper.service";
import { HeroService } from "./../../shared/services/hero.service";
import { Component, OnInit } from "@angular/core";
import { Hero } from "../../shared/models/hero";

@Component({
  selector: "app-heros",
  templateUrl: "./heros.component.html",
  styleUrls: ["./heros.component.css"]
})
export class HerosComponent implements OnInit {
  public heros: Hero[] = [];

  // CTOR is only for DI
  constructor(
    private _heroService: HeroService,
    private _heroHelperService: HeroHelperService
  ) {}

  ngOnInit(): void {
    this._heroService;
    this.setHeros();
  }

  // @ get Heros list
  setHeros(): void {
    // API Call

    // res init
    const heros: Hero[] = [
      new Hero(2, "Kriti", 25, "199 C"),
      new Hero(3, "Kriti3", 253, "199 C3"),
      new Hero(4, "Kriti4", 254, "199 C4"),
      new Hero(5, "Kriti5", 255, "199 C5"),
      new Hero(),
      null
    ];

    //init logic
    heros.forEach(h => this.heros.push(h));
  }
}
