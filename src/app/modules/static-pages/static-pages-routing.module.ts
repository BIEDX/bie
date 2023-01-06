import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseComponent } from './pages/course/course.component';
import { EventComponent } from './pages/event/event.component';
import { HomeComponent } from './pages/home/home.component';
import { LearnTopicComponent } from './pages/learn-topic/learn-topic.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { StaticPageComponent } from './static-page.component';

const routes: Routes = [
  {
    path: '',
    component: StaticPageComponent,
    children: [
      { path: '', component: HomeComponent },
      // {
      //   path: 'about',
      //   component: AboutComponent,
      // },
      // {
      //   path: 'contact',
      //   component: ContactComponent,
      // },
      // {
      //   path: 'course',
      //   component: CourseComponent,
      // },
      // {
      //   path: 'event',
      //   component: EventComponent,
      // },
      // {
      //   path: 'blog',
      //   component: BlogComponent,
      // },
      // {
      //   path: 'learn',
      //   component: LearnTopicComponent,
      // },
      // {
      //   path: 'consult',
      //   component: LearnTopicComponent,
      // },
      {
        path: 'thank-you',
        component: ThankYouComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {}
