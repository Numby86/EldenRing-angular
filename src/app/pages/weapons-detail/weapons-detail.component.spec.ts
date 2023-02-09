import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsDetailComponent } from './weapons-detail.component';

describe('WeaponsDetailComponent', () => {
  let component: WeaponsDetailComponent;
  let fixture: ComponentFixture<WeaponsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
