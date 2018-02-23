import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ImageCardComponent } from './image-card/image-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
