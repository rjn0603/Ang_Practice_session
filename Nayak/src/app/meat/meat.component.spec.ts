import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEATComponent } from './meat.component';

describe('MEATComponent', () => {
  let component: MEATComponent;
  let fixture: ComponentFixture<MEATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
