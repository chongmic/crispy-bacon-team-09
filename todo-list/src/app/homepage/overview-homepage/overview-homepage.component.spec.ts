import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHomepageComponent } from './overview-homepage.component';

describe('OverviewHomepageComponent', () => {
  let component: OverviewHomepageComponent;
  let fixture: ComponentFixture<OverviewHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
