import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../app.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any = '';
  alertMessage: string = '';

  ngOnInit(): void {}

  sendMessage = (msgForm: NgForm) => {
    console.log(environment.apiURL);

    this.http
      .post(`${environment.apiURL}/email/sending`, msgForm.value)
      .subscribe((res) => this.getPosts(res, msgForm));
  };

  getPosts = (param: any, formData: NgForm) => {
    console.log(param.requestCode);
    if (param.requestCode === 1) {
      formData.reset();
    } else {
      this.alertMessage = param.msg;
    }
  };

  handleChangeInput(text: any) {
    console.log(text);
    if (!text) {
      return;
    }
  }
}
