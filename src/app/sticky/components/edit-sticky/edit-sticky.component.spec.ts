import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStickyComponent } from './edit-sticky.component';

describe('EditStickyComponent', () => {
  let component: EditStickyComponent;
  let fixture: ComponentFixture<EditStickyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStickyComponent]
    });
    fixture = TestBed.createComponent(EditStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
