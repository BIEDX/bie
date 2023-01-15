import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { LiveEventAddComponent, LiveEventComponent, LiveEventEditComponent, LiveEventFromComponent, LiveEventListComponent } from '.';
import { LiveEventRoutingModule } from './live-event-routing.module';


@NgModule({
  declarations: [
    LiveEventComponent,
    LiveEventFromComponent,
    LiveEventAddComponent,
    LiveEventEditComponent,
    LiveEventListComponent,
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
