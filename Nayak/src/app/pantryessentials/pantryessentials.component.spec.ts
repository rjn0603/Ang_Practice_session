import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PANTRYESSENTIALSComponent } from './pantryessentials.component';

describe('PANTRYESSENTIALSComponent', () => {
  let component: PANTRYESSENTIALSComponent;
  let fixture: ComponentFixture<PANTRYESSENTIALSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PANTRYESSENTIALSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PANTRYESSENTIALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
