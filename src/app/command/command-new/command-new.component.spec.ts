import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandNewComponent } from './command-new.component';

describe('CommandNewComponent', () => {
  let component: CommandNewComponent;
  let fixture: ComponentFixture<CommandNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
