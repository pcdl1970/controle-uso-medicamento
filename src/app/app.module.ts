import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { UsoMedicamentoComponent } from './uso-medicamento/uso-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentoComponent,
    UsoMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
