import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MILKBARComponent } from './milkbar.component';

describe('MILKBARComponent', () => {
  let component: MILKBARComponent;
  let fixture: ComponentFixture<MILKBARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MILKBARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MILKBARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
