import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova.transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

    {provide: LOCALE_ID, useValue: 'pt' },

    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
