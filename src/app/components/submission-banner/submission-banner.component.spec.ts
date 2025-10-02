import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionBannerComponent } from './submission-banner.component';

describe('SubmissionBannerComponent', () => {
  let component: SubmissionBannerComponent;
  let fixture: ComponentFixture<SubmissionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
