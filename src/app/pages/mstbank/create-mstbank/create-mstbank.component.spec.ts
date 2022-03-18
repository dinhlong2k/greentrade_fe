import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMstbankComponent } from './create-mstbank.component';

describe('CreateMstbankComponent', () => {
  let component: CreateMstbankComponent;
  let fixture: ComponentFixture<CreateMstbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMstbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMstbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
