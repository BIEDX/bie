import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BieImmerseComponent } from './bie-immerse.component';

describe('BieImmerseComponent', () => {
  let component: BieImmerseComponent;
  let fixture: ComponentFixture<BieImmerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BieImmerseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BieImmerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
