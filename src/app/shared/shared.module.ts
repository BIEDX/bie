import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselComponent } from './layout/carousel/carousel.component';

import { WeProvideComponent } from './layout/we-provide/we-provide.component';
import { ParallaxComponent } from './layout/parallax/parallax.component';
import { PopularCourseComponent } from './layout/popular-course/popular-course.component';
import { OurTeamComponent } from './layout/our-team/our-team.component';
import { TestimonialComponent } from './layout/testimonial/testimonial.component';
import { UpcomingEventComponent } from './layout/upcoming-event/upcoming-event.component';
import { RibbonComponent } from './layout/ribbon/ribbon.component';
import { LatestNewsComponent } from './layout/latest-news/latest-news.component';
import { ParallaxWeFocusComponent } from './layout/parallax-we-focus/parallax-we-focus.component';

import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from './layout/subscribe/subscribe.component';
import { StudentNavigationComponent } from './layout/student-navigation/student-navigation.component';
import { AdminNavigationComponent } from './layout/admin-navigation/admin-navigation.component';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CarouselComponent,

    WeProvideComponent,
    ParallaxComponent,
    PopularCourseComponent,
    OurTeamComponent,
    TestimonialComponent,
    UpcomingEventComponent,
    RibbonComponent,
    LatestNewsComponent,
    ParallaxWeFocusComponent,
    SubscribeComponent,
    StudentNavigationComponent,
    AdminNavigationComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    Ng2TelInputModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    CarouselComponent,
    WeProvideComponent,
    ParallaxComponent,
    PopularCourseComponent,
    OurTeamComponent,
    TestimonialComponent,
    UpcomingEventComponent,
    RibbonComponent,
    LatestNewsComponent,
    ParallaxWeFocusComponent,
    SubscribeComponent,
    StudentNavigationComponent,
    AdminNavigationComponent
  ]
})
export class SharedModule { }
