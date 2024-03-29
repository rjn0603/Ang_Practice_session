import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FARMBOXESComponent } from './farmboxes.component';

describe('FARMBOXESComponent', () => {
  let component: FARMBOXESComponent;
  let fixture: ComponentFixture<FARMBOXESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FARMBOXESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FARMBOXESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
