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
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


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
    HeaderComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
