import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliotComponent } from './aliot.component';

describe('AliotComponent', () => {
  let component: AliotComponent;
  let fixture: ComponentFixture<AliotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
