import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SALEComponent } from './sale.component';

describe('SALEComponent', () => {
  let component: SALEComponent;
  let fixture: ComponentFixture<SALEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SALEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SALEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
