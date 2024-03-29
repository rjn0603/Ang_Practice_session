import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAIRYComponent } from './dairy.component';

describe('DAIRYComponent', () => {
  let component: DAIRYComponent;
  let fixture: ComponentFixture<DAIRYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAIRYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAIRYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
