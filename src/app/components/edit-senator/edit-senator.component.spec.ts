import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSenatorComponent } from './edit-senator.component';

describe('EditSenatorComponent', () => {
  let component: EditSenatorComponent;
  let fixture: ComponentFixture<EditSenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
