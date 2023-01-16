import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveEventRoutingModule } from './live-event-routing.module';
import { LiveEventDetailsComponent, LiveEventListComponent, LiveEventComponent } from '.';


@NgModule({
  declarations: [
    LiveEventComponent,
    LiveEventListComponent,
    LiveEventDetailsComponent
  ],
  imports: [
    CommonModule,
    LiveEventRoutingModule
  ]
})
export class LiveEventModule { }
