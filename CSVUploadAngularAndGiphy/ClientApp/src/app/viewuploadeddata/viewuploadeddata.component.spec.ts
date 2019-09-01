import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuploadeddataComponent } from './viewuploadeddata.component';

describe('ViewuploadeddataComponent', () => {
  let component: ViewuploadeddataComponent;
  let fixture: ComponentFixture<ViewuploadeddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuploadeddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuploadeddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
