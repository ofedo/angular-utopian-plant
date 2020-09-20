import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCollapseNavbarComponent } from './ngbd-collapse-navbar/ngbd-collapse-navbar.component';
import { MachineCardComponent } from './machine-card/machine-card.component';
import { NgbdModalComponent } from './ngbd-modal/ngbd-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalComponent,
    NgbdCollapseNavbarComponent,
    MachineCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
