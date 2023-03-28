import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingPageComponent } from './about-us/landing-page/landing-page.component';
import { AboutUsBrandsComponent } from './about-us/about-us-brands/about-us-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LandingPageComponent,
    AboutUsBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
