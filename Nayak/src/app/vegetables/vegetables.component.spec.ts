import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEGETABLESComponent } from './vegetables.component';

describe('VEGETABLESComponent', () => {
  let component: VEGETABLESComponent;
  let fixture: ComponentFixture<VEGETABLESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VEGETABLESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VEGETABLESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
