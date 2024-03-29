import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACAIComponent } from './acai.component';

describe('ACAIComponent', () => {
  let component: ACAIComponent;
  let fixture: ComponentFixture<ACAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACAIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
