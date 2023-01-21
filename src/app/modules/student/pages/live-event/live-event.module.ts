import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveEventRoutingModule } from './live-event-routing.module';
import { LiveEventComponent, LiveEventDetailsComponent, LiveEventListComponent, } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [
    LiveEventComponent,
    LiveEventListComponent,
    LiveEventDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LiveEventRoutingModule,
    Ng2TelInputModule

  ]
})
export class LiveEventModule { }
