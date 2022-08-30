import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCurrentComponent } from './city-current.component';

describe('CityCurrentComponent', () => {
  let component: CityCurrentComponent;
  let fixture: ComponentFixture<CityCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
