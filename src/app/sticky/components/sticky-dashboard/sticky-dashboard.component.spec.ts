import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyDashboardComponent } from './sticky-dashboard.component';

describe('StickyDashboardComponent', () => {
  let component: StickyDashboardComponent;
  let fixture: ComponentFixture<StickyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyDashboardComponent]
    });
    fixture = TestBed.createComponent(StickyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
