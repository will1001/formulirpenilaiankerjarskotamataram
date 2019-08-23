import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTableComponent } from './body-table.component';

describe('BodyTableComponent', () => {
  let component: BodyTableComponent;
  let fixture: ComponentFixture<BodyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
