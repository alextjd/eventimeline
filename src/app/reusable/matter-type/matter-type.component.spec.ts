import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterTypeComponent } from './matter-type.component';

describe('MatterTypeComponent', () => {
  let component: MatterTypeComponent;
  let fixture: ComponentFixture<MatterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
