import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navigations, RoutePath } from 'src/app/core/navigation';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';

@Component({
  selector: 'el-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any = null;
  phoneNo = '+6589525405';
  navigationsList: RoutePath[] = [];

  constructor(
    private router: Router,
    private userAuth: ProviderUserAuthService
  ) { }

  ngOnInit(): void {
    const result = localStorage.getItem('user-key');
    if (result) {
      const parse = JSON.parse(result);
      this.user = parse;
      console.log('user', this.user);
    }
    this.navigationsList = navigations(this.user?.data?.role);
  }

  sendWhatsAppMessage() {
    window.open('https://wa.me/' + this.phoneNo, '_blank');
  }

  mailTo() {
    window.open('mailto:ask@biedx.com', '_blank');
  }

  // goToItems(value: string) {
  //   console.log('hi');
  //   switch (value) {
  //     case 'home':
  //       this.router.navigate(['/home']);
  //       break;
  //     case 'course':
  //       this.router.navigate(['/course']);
  //       break;
  //     case 'event':
  //       this.router.navigate(['/event']);
  //       break;
  //     case 'blog':
  //       this.router.navigate(['/blog']);
  //       break;
  //     case 'contact':
  //       this.router.navigate(['/contact']);
  //       break;
  //     case 'about':
  //       this.router.navigate(['/about']);
  //       break;
  //     case 'sign-in':
  //       this.router.navigate(['/auth/sign-in']);
  //       break;
  //   }
  // }

  handleLogout() {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
