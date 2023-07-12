import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-grid',
  templateUrl: './jobs-grid.component.html',
  styleUrls: ['./jobs-grid.component.css']
})
export class JobsGridComponent {
  heading = 'KS-Technologies Jobs'
  jobs = [
    {
      title: '',
      subtitle: '',
      text: ''
    },
    // {
    //   title: 'Graphic Designer',
    //   subtitle: 'Bahria Town, Lahore',
    //   text: 'We are looking for a graphic designer to turn our projects into visually appealing products for our clients. Graphic Designer responsibilities include creating visual concepts, using computer software, and communicating ideas that inspire, inform, and captivate consumers.'
    // },
    // {
    //   title: '',
    //   subtitle: 'Bahria Town,Lahore',
    //   text: '',
    // },
    // {
    //   title: 'Social Media Marketer Intern',
    //   subtitle: 'Bahria Town,Lahore',
    //   text: 'We are looking for a UI/UX designer to turn our projects into easy-to-use products for our clients. UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components.',
    // },
    // {
    //   title: 'Senior Web Developer',
    //   subtitle: 'Bahria Town,Lahore',
    //   text: 'We are looking for a UI/UX designer to turn our projects into easy-to-use products for our clients. UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components.',
    // },
    // {
    //   title: 'Senior Front End/UI Developer',
    //   subtitle: 'Bahria Town,Lahore',
    //   text: 'We are looking for a UI/UX designer to turn our projects into easy-to-use products for our clients. UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components.',
    // },
  ];
}
