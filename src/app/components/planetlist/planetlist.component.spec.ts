import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetlistComponent } from './planetlist.component';

describe('PlanetlistComponent', () => {
  let component: PlanetlistComponent;
  let fixture: ComponentFixture<PlanetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
