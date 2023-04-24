import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './pages/pantalla-examen/pantalla-examen.component';
import { LoadingComponent } from './components/loading/loading.component';
import {NgOptimizedImage} from "@angular/common";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelModule} from "primeng/panel";

@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    PanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
