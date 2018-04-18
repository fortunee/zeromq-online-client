import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AddressFieldComponent } from './components/shared/address-field/address-field.component';
import { MessageFieldComponent } from './components/shared/message-field/message-field.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { PipelineOptionComponent } from './components/shared/pipeline-option/pipeline-option.component';


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
