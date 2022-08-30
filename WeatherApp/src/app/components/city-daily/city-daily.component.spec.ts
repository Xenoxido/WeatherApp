import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDailyComponent } from './city-daily.component';

describe('CityDailyComponent', () => {
  let component: CityDailyComponent;
  let fixture: ComponentFixture<CityDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
