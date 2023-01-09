import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.component.html',
  styleUrls: ['./body-parts.component.scss']
})
export class BodyPartsComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  bodyParts: any[] = [];
  image: string;

  constructor(
    private _courseService: CourseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getBodyParts();
  }

  getBodyParts(): void {
    this.serviceSubscription.push(
      this._courseService.getBodyParts().subscribe(
        (res) => {
          if (Array.isArray(res)) {
            this.bodyParts = res;
            this.bodyParts.forEach(element => {
              this.image = environment.imgUrl + element.image
            });
          }
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  navigate(id): void {
    this._router.navigateByUrl("/diagnosis" + '?id=' + id);
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }
}
