import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTopicComponent } from './consult-topic.component';

describe('ConsultTopicComponent', () => {
  let component: ConsultTopicComponent;
  let fixture: ComponentFixture<ConsultTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
