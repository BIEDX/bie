import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  @ViewChild('btn', { static: false }) btn: ElementRef<HTMLElement>;

  name: string = '';
  email: string = '';
  checked: boolean = false;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    const result = localStorage.getItem('user-key');
    if (result) {
      const parsed = JSON.parse(result);
      if (parsed) {
        setTimeout(() => {
          this.btn.nativeElement.click();
        }, 15000);
      }
    }
  }

  submit(event) {
    event.preventDefault();
    this.http
      .post(environment.apiUrl + '/newsletter', {
        name: this.name,
        email: this.email,
      })
      .subscribe(
        (res) => {
          console.log('Success');
          this.name = '';
          this.email = '';
        },
        (error) => console.log(error)
      );
  }

  onChange() {
    this.checked = !this.checked;
  }
}
