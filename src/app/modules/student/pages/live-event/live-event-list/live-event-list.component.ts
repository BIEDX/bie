import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LiveEventService } from 'src/app/core/providers/apis/live-event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-std-live-event-list',
  templateUrl: './live-event-list.component.html',
  styleUrls: ['./live-event-list.component.scss']
})
export class LiveEventListComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  courses: any[] = [];
  image: string;
  constructor(
    private _liveEventService: LiveEventService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses('');
  }

  getCourses(data): void {
    this.serviceSubscription.push(
      this._liveEventService.getEvent(data ? data : null).subscribe(
        (res) => {
          if (Array.isArray(res)) {
            this.courses = res;
            this.courses.forEach(element => {
              this.image = environment.imgUrl + element?.image;
            })
          }
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  searchCourses(event): void {
    let data = event.target.value;
    let item = {
      value: data,
      type: 'search'
    }
    this.getCourses(item);
  }

  seeDetails(_id): void {
    this.router.navigateByUrl("/student/live-event/details/" + _id)
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}
