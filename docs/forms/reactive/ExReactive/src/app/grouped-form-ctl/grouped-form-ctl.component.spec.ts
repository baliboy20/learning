import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedFormCtlComponent } from './grouped-form-ctl.component';

describe('GroupedFormCtlComponent', () => {
  let component: GroupedFormCtlComponent;
  let fixture: ComponentFixture<GroupedFormCtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedFormCtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedFormCtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
