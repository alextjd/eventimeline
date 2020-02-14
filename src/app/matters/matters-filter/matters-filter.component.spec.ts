import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattersFilterComponent } from './matters-filter.component';

describe('MattersFilterComponent', () => {
  let component: MattersFilterComponent;
  let fixture: ComponentFixture<MattersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
