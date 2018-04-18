import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AddressFieldComponent } from './components/address-field/address-field.component';
import { MessageFieldComponent } from './components/message-field/message-field.component';
import { ButtonComponent } from './components/button/button.component';
import { PipelineOptionComponent } from './components/pipeline-option/pipeline-option.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddressFieldComponent,
    MessageFieldComponent,
    ButtonComponent,
    PipelineOptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
