import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEAFOODComponent } from './seafood.component';

describe('SEAFOODComponent', () => {
  let component: SEAFOODComponent;
  let fixture: ComponentFixture<SEAFOODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEAFOODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SEAFOODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
