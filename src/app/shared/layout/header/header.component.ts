import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderUserAuthService } from 'src/app/core/providers/auth/provider-user-auth.service';

@Component({
  selector: 'el-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = {}
  phoneNo = '+6589525405'
  constructor(private router: Router, private userAuth: ProviderUserAuthService) { }

  ngOnInit(): void {
    this.userAuth.getUserStorage().subscribe(
      (res) => {
        this.user = res;
        console.log(this.user)
      }
    )
  }

  sendWhatsAppMessage(){
    window.open('https://wa.me/' + this.phoneNo, "_blank")
  }
  
  mailTo(){
    window.open("mailto:ask@biedx.com", "_blank")
  }

  goToItems(value: string) {
    console.log('hi')
    switch (value) {
      case 'home':
        this.router.navigate(['/home']);
        break;
        case 'course':
        this.router.navigate(['/course']);
        break;
        case 'event':
        this.router.navigate(['/event']);
        break;
        case 'blog':
        this.router.navigate(['/blog']);
        break;
        case 'contact':
        this.router.navigate(['/contact']);
        break;
        case 'about':
        this.router.navigate(['/about']);
        break;
        case 'sign-in':
          this.router.navigate(['/auth/sign-in']);
          break;
        
    }

  }
}
