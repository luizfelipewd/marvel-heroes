import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CharactersService } from "../../services/api/characters.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  constructor(private characterService: CharactersService) {}
  allCharacters: Observable<any>;
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterService.getAllCharacters();
  }
}
