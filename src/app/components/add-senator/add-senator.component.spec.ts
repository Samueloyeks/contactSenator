import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSenatorComponent } from './add-senator.component';

describe('AddSenatorComponent', () => {
  let component: AddSenatorComponent;
  let fixture: ComponentFixture<AddSenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
