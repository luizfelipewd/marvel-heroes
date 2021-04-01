import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharactersService } from "src/app/services/api/characters.service";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.css"],
})
export class CharacterComponent implements OnInit {
  character: {};

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.charactersService.getCharacterById(id).subscribe((character) => {
      this.character = character[0];
    });
  }
}
