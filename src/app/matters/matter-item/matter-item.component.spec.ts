import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterItemComponent } from './matter-item.component';

describe('MatterItemComponent', () => {
  let component: MatterItemComponent;
  let fixture: ComponentFixture<MatterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
