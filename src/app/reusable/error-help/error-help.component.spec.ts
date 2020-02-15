import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHelpComponent } from './error-help.component';

describe('ErrorHelpComponent', () => {
  let component: ErrorHelpComponent;
  let fixture: ComponentFixture<ErrorHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
