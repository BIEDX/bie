import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveEventDetailsComponent, LiveEventListComponent, LiveEventComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: LiveEventComponent,
    children: [
      {
        path: '', redirectTo: 'list'
      },
      {
        path: 'list',
        component: LiveEventListComponent,
      },
      {
        path: 'details',
        component: LiveEventDetailsComponent,
      },
      {
        path: 'details/:id',
        component: LiveEventDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveEventRoutingModule { }
