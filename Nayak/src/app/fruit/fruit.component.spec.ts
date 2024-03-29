import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRUITComponent } from './fruit.component';

describe('FRUITComponent', () => {
  let component: FRUITComponent;
  let fixture: ComponentFixture<FRUITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FRUITComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FRUITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
