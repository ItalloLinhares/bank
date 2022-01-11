import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewBankTransferComponent } from './new bank transfer/new-bank-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBankTransferComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
