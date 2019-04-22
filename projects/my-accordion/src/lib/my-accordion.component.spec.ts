import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccordionComponent } from './my-accordion.component';

describe('MyAccordionComponent', () => {
  let component: MyAccordionComponent;
  let fixture: ComponentFixture<MyAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
