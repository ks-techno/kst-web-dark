import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/Main-Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './Components/Main-Dashboard/header/header.component';
import { FooterComponent } from './Components/Main-Dashboard/footer/footer.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { ErrorComponent } from './Components/Pages/error/error.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { PrivacyPoliciyComponent } from './Components/Pages/privacy-policiy/privacy-policiy.component';
import { LandingPageAboutUsComponent } from './Components/Pages/about/landing-page-about-us/landing-page-about-us.component';
import { BrandsAboutUsComponent } from './Components/Pages/about/brands-about-us/brands-about-us.component';
import { AccordionsComponent } from './Components/Pages/about/accordions/accordions.component';
import { AboutPageInfoComponent } from './Components/Pages/about/about-page-info/about-page-info.component';
import { CounterComponent } from './Components/Pages/about/counter/counter.component';
import { MeetExpertComponent } from './Components/Pages/about/meet-expert/meet-expert.component';
import { ServicesLandingPageComponent } from './Components/Pages/our-services/services-landing-page/services-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    OurServicesComponent,
    PortfolioComponent,
    PrivacyPoliciyComponent,
    LandingPageAboutUsComponent,
    BrandsAboutUsComponent,
    AccordionsComponent,
    AboutPageInfoComponent,
    CounterComponent,
    MeetExpertComponent,
    ServicesLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
