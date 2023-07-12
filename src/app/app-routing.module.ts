import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { PrivacyPoliciyComponent } from './Components/Pages/privacy-policiy/privacy-policiy.component';
import { ErrorComponent } from './Components/Pages/error/error.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BlogComponent } from './Components/Pages/blog/blog.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';


// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//     component: HomeComponent,
//     path: "home",
//     data: {
//       heading: 'KS-Technologies',
//       subheading: 'A Software development company devoted to your project\'s success which accelerate your digital growth with our solutions.'
//     }
//   },
//   {
//     component: ContactComponent,
//     path: "contact",
//     data: {
//       heading: 'Contact Us',
//       subheading: 'Get in touch with our team'
//     }
//   },
//   {
//     component: PortfolioComponent,
//     path: "portfolio",
//     data: {
//       heading: 'Portfolio',
//       subheading: 'We are a team of expert developers, designers, and project managers who are passionate about delivering high-quality software solutions to our clients.'
//     }
//   },
//   {
//     component: AboutComponent,
//     path: "about",
//     data: {
//       heading: 'About Us',
//       subheading: 'KS-Technologies is a software development company. Our team of expert developers are skilled in React JS, AWS, Angular, WordPress, Shopify, Block chain, Machine Learning, PMO Department, Python with AI, Web3 Solidity and ROR, allowing us to develop software for a variety of platforms and industries. We are dedicated to provide top-quality software solutions to our clients, and we take pride in delivering software that meets and exceeds their expectations.'
//     }
//   },
//   {
//     component: OurServicesComponent,
//     path: "our-service",
//     data: {
//       heading: 'Our Services',
//       subheading: 'We are dedicated to provide top-quality software solutions to our clients, and we take pride in delivering software that meets and exceeds their expectations. We strive to stay on top of the latest trends and technologies to provide our clients with cutting-edge software solutions.'
//     }
//   },
//   {
//     component: BlogComponent,
//     path: "blog",
//     data: {
//       heading: '',
//       subheading: ''
//     }
//   },
//   {
//     component: PrivacyPoliciyComponent,
//     path: "privacy-policy",
//     data: {
//       heading: 'Privacy Policy',
//       subheading: ''
//     }
//   },
//   { path: '**', component: ErrorComponent }
// ];
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: OurServicesComponent,
    path: "our-service"
  },
  {
    component: BlogComponent,
    path: "blog"
  },
  {
    component: PortfolioComponent,
    path: "portfolio"
  },
  {
    component: PortfolioComponent,
    path: "portfolio"
  },
  {
    component: PrivacyPoliciyComponent,
    path: "privacy-policy"
  },
  {
    component: JobsComponent,
    path: "jobs"
  },
  {
    component: ContactComponent,
    path: "contact"
  },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
