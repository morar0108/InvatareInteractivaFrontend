import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStickyComponent } from './create-sticky.component';

describe('CreateStickyComponent', () => {
  let component: CreateStickyComponent;
  let fixture: ComponentFixture<CreateStickyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStickyComponent]
    });
    fixture = TestBed.createComponent(CreateStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
