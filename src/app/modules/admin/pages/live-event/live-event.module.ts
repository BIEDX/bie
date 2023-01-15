import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveEventRoutingModule } from './live-event-routing.module';
import { LiveEventDetailsComponent, LiveEventAddComponent, LiveEventComponent, LiveEventEditComponent, LiveEventFromComponent, LiveEventListComponent } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    LiveEventComponent,
    LiveEventFromComponent,
    LiveEventAddComponent,
    LiveEventEditComponent,
    LiveEventListComponent,
    LiveEventDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    LiveEventRoutingModule
  ],
  exports: [LiveEventFromComponent],
})
export class LiveEventModule { }
