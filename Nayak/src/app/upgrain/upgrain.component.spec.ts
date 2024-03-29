import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPGRAINComponent } from './upgrain.component';

describe('UPGRAINComponent', () => {
  let component: UPGRAINComponent;
  let fixture: ComponentFixture<UPGRAINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPGRAINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPGRAINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
