import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/planet/service/planets.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

  constructor( private service: PlanetsService) { }

  ngOnInit(): void {
    this.getDataPlanets();
  }

  public getDataPlanets(): void {
    this.service.getPlanets().subscribe(data => console.log(data))
  }

}
