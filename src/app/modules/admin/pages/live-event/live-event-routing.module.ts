import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveEventAddComponent, LiveEventComponent, LiveEventEditComponent, LiveEventListComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: LiveEventComponent,
    children: [
      {
        path: '', redirectTo: 'list'
      },
      {
        path: 'add',
        component: LiveEventAddComponent
      },
      {
        path: 'edit',
        component: LiveEventEditComponent
      },
      {
        path: 'list',
        component: LiveEventListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveEventRoutingModule { }
