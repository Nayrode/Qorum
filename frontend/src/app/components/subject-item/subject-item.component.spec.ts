import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectItemComponent } from './subject-item.component';

describe('SubjectItemComponent', () => {
  let component: SubjectItemComponent;
  let fixture: ComponentFixture<SubjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
