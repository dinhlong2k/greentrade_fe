import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstbankListComponent } from './mstbank-list.component';

describe('MstbankListComponent', () => {
  let component: MstbankListComponent;
  let fixture: ComponentFixture<MstbankListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MstbankListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MstbankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
