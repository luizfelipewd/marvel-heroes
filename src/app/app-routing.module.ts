import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharacterComponent } from "./components/character/character.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "heroes",
    component: HeroesComponent,
  },
  {
    path: "hero/:id",
    component: CharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
