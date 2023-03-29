import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { ErrorComponent } from './Components/Pages/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    component: HomeComponent,
    path: "home"
  },
  { 
    component:ContactComponent,
    path: "contact"
  },
  { 
    component: PortfolioComponent,
    path: "portfolio"
  },
  { 
    component: AboutComponent,
    path: "about"
  },
  { 
    component: OurServicesComponent,
    path: "our-service"
  },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
