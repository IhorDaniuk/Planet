import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlanetCardComponent } from './components/planet_card/planet-card/planet-card.component';
import { PlanetsService } from './service/planets.service';

@NgModule({
  declarations: [PlanetCardComponent],
  exports: [PlanetCardComponent],
  providers: [PlanetsService],
  imports: [
    HttpClientModule,
    CommonModule,
  ]
})
export class PlanetsModule { }
