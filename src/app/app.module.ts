import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import 'codemirror/mode/javascript/javascript';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AddressFieldComponent } from './components/shared/address-field/address-field.component';
import { MessageFieldComponent } from './components/shared/message-field/message-field.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { PipelineOptionComponent } from './components/shared/pipeline-option/pipeline-option.component';
import { EmitComponent } from './components/emit/emit.component';
import { ListenComponent } from './components/listen/listen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddressFieldComponent,
    MessageFieldComponent,
    ButtonComponent,
    PipelineOptionComponent,
    EmitComponent,
    ListenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
