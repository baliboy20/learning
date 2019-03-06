import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildExampleComponent } from './form-build-example.component';

describe('FormBuildExampleComponent', () => {
  let component: FormBuildExampleComponent;
  let fixture: ComponentFixture<FormBuildExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuildExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
