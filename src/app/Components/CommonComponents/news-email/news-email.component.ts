import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enironment/enviornment';

@Component({
  selector: 'app-news-email',
  templateUrl: './news-email.component.html',
  styleUrls: ['./news-email.component.css']
})

export class NewsEmailComponent {
  emailForm: FormGroup;
  message!:string

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    interface ApiResponse {
      [key: string]: any;
    }
    const apiUrl = environment.baseUrl+"subscribe";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    if (this.emailForm.valid) {
      const email = this.emailForm.value.email;
      this.http.post(apiUrl, { email:email })
        .subscribe((response: ApiResponse) => {
          console.log("response", response);
        if (response && response?.['message']) {
          this.message = response?.['message'];
        } else {
          this.message = "Unexpected response from server";
        }
        this.emailForm.reset();
        }, error => {
          this.message = "Subscription failed";
        });
    }
  }
}
