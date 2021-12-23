import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisteRdvComponent } from './specialiste-rdv.component';

describe('SpecialisteRdvComponent', () => {
  let component: SpecialisteRdvComponent;
  let fixture: ComponentFixture<SpecialisteRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialisteRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisteRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
