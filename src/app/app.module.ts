import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderModule } from './core/header.module';
import { PlanetsModule } from './planet/planets.module';
import { httpInterceptorProviders } from './planet/interceptor/_index-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PlanetsModule,
    HeaderModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
