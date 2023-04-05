import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enironment/enviornment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-contact-us-form-page',
  templateUrl: './contact-us-form-page.component.html',
  styleUrls: ['./contact-us-form-page.component.css']
})
export class ContactUsFormPageComponent {
  form: FormGroup;
  message!: string;
  Errormessage!: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^03[0-9]{2}-[0-9]{7}$')]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    const formData: ContactFormData = {
      first_name: this.form.value.firstname,
      last_name: this.form.value.lastname,
      email: this.form.value.email,
      phone: this.form.value.phone,
      subject: this.form.value.subject,
      message: this.form.value.message
    };
    const apiUrl = environment.baseUrl + "contact";
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    const options = { headers };
    this.http.post(apiUrl, formData, options).pipe(
      catchError(error => {
        return throwError("An error occurred while sending the form data.");
      })
    ).subscribe(response => {
      this.message = 'Thank you for submitting the query. We will contact you shorlty.';
      this.form.reset();
    }, error => {
      this.message = 'An error occurred while sending the form data.';
    });
  }
}
