import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa este módulo para habilitar el uso de ngModel

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule], // Agrega FormsModule aquí
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
