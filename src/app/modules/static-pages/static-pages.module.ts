import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-pages-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StaticPageComponent } from './static-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from './pages/course/course.component';
import { EventComponent } from './pages/event/event.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ConsultTopicComponent } from './pages/consult-topic/consult-topic.component';
import { EducatorsComponent } from './pages/educators/educators.component';
import { LearnTopicComponent } from './pages/learn-topic/learn-topic.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { AddCartComponent, BodyPartsComponent, CourseListComponent, DiagnosisComponent } from '.';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StaticPageComponent,
    CourseComponent,
    EventComponent,
    BlogComponent,
    ConsultTopicComponent,
    EducatorsComponent,
    LearnTopicComponent,
    ThankYouComponent,
    BodyPartsComponent,
    CourseListComponent,
    DiagnosisComponent,
    AddCartComponent
  ],
  imports: [
    CommonModule,
    StaticRoutingModule,

    SharedModule
  ]
})
export class StaticModule { }
