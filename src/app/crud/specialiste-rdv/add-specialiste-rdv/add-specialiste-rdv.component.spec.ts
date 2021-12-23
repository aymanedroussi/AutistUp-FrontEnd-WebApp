import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialisteRdvComponent } from './add-specialiste-rdv.component';

describe('AddSpecialisteRdvComponent', () => {
  let component: AddSpecialisteRdvComponent;
  let fixture: ComponentFixture<AddSpecialisteRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialisteRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialisteRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
