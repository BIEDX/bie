import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'el-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  email: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submit(event) {
    event.preventDefault();
    this.http
      .post(environment.apiUrl + '/newsletter', { name: '', email: this.email })
      .subscribe(
        (res) => {

          console.log('Success', this.email);
          this.email = '';
        },
        (error) => console.log(error)
      );
  }
}
