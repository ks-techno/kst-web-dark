import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
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
import { AccordionsComponent } from './Components/Pages/about/accordions/accordions.component';
import { AboutPageInfoComponent } from './Components/Pages/about/about-page-info/about-page-info.component';
import { CounterComponent } from './Components/Pages/about/counter/counter.component';
import { MeetExpertComponent } from './Components/Pages/about/meet-expert/meet-expert.component';
import { LandingPageComponent } from './Components/CommonComponents/Landing-Page/landing-page/landing-page.component';
import { BrandsComponent } from './Components/CommonComponents/Brand-Logos/brands/brands.component';
import { ServiceForClientsComponent } from './Components/Pages/our-services/service-for-clients/service-for-clients.component';
import { BackToTopComponent } from './Components/CommonComponents/back-to-top/back-to-top.component';
import { CaroselComponent } from './Components/CommonComponents/carosel/carosel.component';
import { ContactUsFormPageComponent } from './Components/Pages/contact/contact-us-form-page/contact-us-form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardAboutUsComponent } from './Components/Pages/home/card-about-us/card-about-us.component';
import { NewsEmailComponent } from './Components/CommonComponents/news-email/news-email.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsComponent } from './Components/Pages/home/testimonials/testimonials.component';
import { TopServicesComponent } from './Components/Pages/home/top-services/top-services.component';
import { AboutHomePageComponent } from './Components/CommonComponents/Landing-Page/about-home-page/about-home-page.component';
import { OurServicesHomePageComponent } from './Components/CommonComponents/Landing-Page/our-services-home-page/our-services-home-page.component';
import { PortfolioHomePageComponent } from './Components/CommonComponents/Landing-Page/portfolio-home-page/portfolio-home-page.component';
import { ContactUsHomePageComponent } from './Components/CommonComponents/Landing-Page/contact-us-home-page/contact-us-home-page.component';
import { VideoLoaderComponent } from './Components/video-loader/video-loader.component';
import { BlogComponent } from './Components/Pages/blog/blog.component';


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
    AccordionsComponent,
    AboutPageInfoComponent,
    CounterComponent,
    MeetExpertComponent,
    LandingPageComponent,
    BrandsComponent,
    ServiceForClientsComponent,
    BackToTopComponent,
    CaroselComponent,
    ContactUsFormPageComponent,
    CardAboutUsComponent,
    NewsEmailComponent,
    TestimonialsComponent,
    TopServicesComponent,
    AboutHomePageComponent,
    OurServicesHomePageComponent,
    PortfolioHomePageComponent,
    ContactUsHomePageComponent,
    VideoLoaderComponent,
    BlogComponent,
 
  ],
  imports: [
    
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RatingModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
