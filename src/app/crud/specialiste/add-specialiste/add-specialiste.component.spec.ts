import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialisteComponent } from './add-specialiste.component';

describe('AddSpecialisteComponent', () => {
  let component: AddSpecialisteComponent;
  let fixture: ComponentFixture<AddSpecialisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
