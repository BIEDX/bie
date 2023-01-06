import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/providers/apis/auth.service';
import { ConstantsService } from 'src/app/core/providers/apis/constants.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users:any[] = [];

  constructor(private router: Router,private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe((res) => {
      console.log(res);
      if(Array.isArray(res)){
        this.users = res;
      }
    });
  }

  naviagteToNewsLetter(){
    this.router.navigateByUrl('/admin/newsletter')
  }
}
