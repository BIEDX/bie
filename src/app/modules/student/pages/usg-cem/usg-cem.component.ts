import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usg-cem',
  templateUrl: './usg-cem.component.html',
  styleUrls: ['./usg-cem.component.scss']
})
export class UsgCemComponent implements OnInit {
  eventId: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    if (this._activatedRoute.snapshot.paramMap.get('id')) {
      this.eventId = this._activatedRoute.snapshot.paramMap.get('id');
    } else {
      this._activatedRoute.queryParams.subscribe((res) => {
        if (res['eid']) {
          this.eventId = res['eid'];
        } else {
          this.eventId = '63c4ed418d164061ebd476dc'
        }
      })
    }
  }

  navigate(): void {
    this._router.navigateByUrl('/student/live-event/details/' + this.eventId);
  }
}
