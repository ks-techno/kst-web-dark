import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news-email',
  templateUrl: './news-email.component.html',
  styleUrls: ['./news-email.component.css']
})
export class NewsEmailComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      // API integration logic here
      this.http.post('your-api-url', { email }).subscribe(response => {
        console.log(response);
      });
    }
  }
}
