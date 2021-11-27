import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GdPipesModule } from '@gdoor/helpers/pipes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GdPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
