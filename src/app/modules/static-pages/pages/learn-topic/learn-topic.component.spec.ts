import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTopicComponent } from './learn-topic.component';

describe('LearnTopicComponent', () => {
  let component: LearnTopicComponent;
  let fixture: ComponentFixture<LearnTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
