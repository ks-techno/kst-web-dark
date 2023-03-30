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
import { BrandsAboutUsComponent } from './Components/Pages/about/brands-about-us/brands-about-us.component';
import { AccordionsComponent } from './Components/Pages/about/accordions/accordions.component';
import { AboutPageInfoComponent } from './Components/Pages/about/about-page-info/about-page-info.component';
import { CounterComponent } from './Components/Pages/about/counter/counter.component';
import { MeetExpertComponent } from './Components/Pages/about/meet-expert/meet-expert.component';
import { LandingPageComponent } from './Components/CommonComponents/Landing-Page/landing-page/landing-page.component';
import { NewsLetterComponent } from './Components/CommonComponents/News-Letter/news-letter/news-letter.component';
import { BrandsComponent } from './Components/CommonComponents/Brand-Logos/brands/brands.component';
import { ServiceForClientsComponent } from './Components/Pages/our-services/service-for-clients/service-for-clients.component';
import { NewsletterComponent } from './Components/Pages/our-services/newsletter/newsletter.component';


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
    BrandsAboutUsComponent,
    AccordionsComponent,
    AboutPageInfoComponent,
    CounterComponent,
    MeetExpertComponent,
    LandingPageComponent,
    NewsLetterComponent,
    BrandsComponent,
    ServiceForClientsComponent,
    NewsletterComponent,
    
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
