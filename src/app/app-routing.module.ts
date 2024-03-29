import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CopyrightComponent } from './service/copyright/copyright.component';
import { CyberLawComponent } from './service/cyber-law/cyber-law.component';
import { DesignComponent } from './service/design/design.component';
import { GeographicalIndicationComponent } from './service/geographical-indication/geographical-indication.component';
import { IpCommercializationComponent } from './service/ip-commercialization/ip-commercialization.component';
import { IplitigationComponent } from './service/iplitigation/iplitigation.component';
import { PatentComponent } from './service/patent/patent.component';
import { TrademarkComponent } from './service/trademark/trademark.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'patent', component: PatentComponent},  
  { path: 'trademark', component: TrademarkComponent},
  { path: 'design', component: DesignComponent},
  { path: 'copyright', component: CopyrightComponent},
  { path: 'cyber-law', component: CyberLawComponent},
  { path: 'geographical-indication', component: GeographicalIndicationComponent},
  { path: 'ip-litigation', component: IplitigationComponent},
  { path: 'ip-commercialization', component: IpCommercializationComponent},
  { path: 'home', component: MainComponent},
  { path: 'about-us', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'privacy-policy', component:PrivacyPolicyComponent},
  {path: 'terms-of-services', component:TermsOfServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
