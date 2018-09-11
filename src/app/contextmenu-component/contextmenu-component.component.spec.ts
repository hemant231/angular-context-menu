import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextmenuComponentComponent } from './contextmenu-component.component';

describe('ContextmenuComponentComponent', () => {
  let component: ContextmenuComponentComponent;
  let fixture: ComponentFixture<ContextmenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextmenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextmenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
