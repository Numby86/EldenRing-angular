import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorsDetailComponent } from './armors-detail.component';

describe('ArmorsDetailComponent', () => {
  let component: ArmorsDetailComponent;
  let fixture: ComponentFixture<ArmorsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
