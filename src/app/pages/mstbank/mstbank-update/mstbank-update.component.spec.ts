import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstbankUpdateComponent } from './mstbank-update.component';

describe('MstbankUpdateComponent', () => {
  let component: MstbankUpdateComponent;
  let fixture: ComponentFixture<MstbankUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MstbankUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MstbankUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
