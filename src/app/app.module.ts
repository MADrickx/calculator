import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './includes/header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HeaderComponent,
    CalculatorComponent,

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularSvgIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
