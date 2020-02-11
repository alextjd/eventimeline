import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattersContainerComponent } from './matters-container.component';

describe('MattersContainerComponent', () => {
  let component: MattersContainerComponent;
  let fixture: ComponentFixture<MattersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
