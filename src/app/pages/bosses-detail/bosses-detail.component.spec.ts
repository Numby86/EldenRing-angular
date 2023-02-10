import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesDetailComponent } from './bosses-detail.component';

describe('BossesDetailComponent', () => {
  let component: BossesDetailComponent;
  let fixture: ComponentFixture<BossesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
