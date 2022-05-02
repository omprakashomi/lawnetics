import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PatentComponent } from './service/patent/patent.component';
import { TrademarkComponent } from './service/trademark/trademark.component';
import { DesignComponent } from './service/design/design.component';
import { IplitigationComponent } from './service/iplitigation/iplitigation.component';
import { CopyrightComponent } from './service/copyright/copyright.component';
import { GeographicalIndicationComponent } from './service/geographical-indication/geographical-indication.component';
import { IpCommercializationComponent } from './service/ip-commercialization/ip-commercialization.component';
import { CyberLawComponent } from './service/cyber-law/cyber-law.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    PatentComponent,
    TrademarkComponent,
    DesignComponent,
    IplitigationComponent,
    CopyrightComponent,
    GeographicalIndicationComponent,
    IpCommercializationComponent,
    CyberLawComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
