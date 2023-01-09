import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  bodyPartsId: string;
  diagnosisList: any;
  image: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CourseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.bodyPartsId = params['id'];
        this.getDiagnosis(this.bodyPartsId);
      } catch (err) {
        console.log('err..');
      }
    });
  }

  getDiagnosis(id): void {
    this.serviceSubscription.push(
      this._courseService.getDiagnos(id).subscribe(
        (res) => {
          this.diagnosisList = res;
          this.diagnosisList.forEach(element => {
            this.image = environment.imgUrl + element.image
          });
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  navigate(id): void {
    this._router.navigateByUrl("/course-list" + '?id=' + id);
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }
}
