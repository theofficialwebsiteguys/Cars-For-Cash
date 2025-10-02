import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickOfferFormComponent } from './quick-offer-form.component';

describe('QuickOfferFormComponent', () => {
  let component: QuickOfferFormComponent;
  let fixture: ComponentFixture<QuickOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickOfferFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
