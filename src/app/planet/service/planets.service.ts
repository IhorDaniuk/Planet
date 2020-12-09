import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../interface/planets';

export const planet = 'planets/';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor( private http: HttpClient) { }

  public getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(planet); 
  }
}
