import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HerosComponent } from "./pages/heros/heros.component";
import { HeroDetailsComponent } from "./pages/hero-details/hero-details.component";

@NgModule({
  declarations: [HerosComponent, HeroDetailsComponent],
  imports: [CommonModule],
  exports: [HerosComponent, HeroDetailsComponent]
})
export class HeroModule {}
