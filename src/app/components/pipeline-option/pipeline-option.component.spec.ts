import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineOptionComponent } from './pipeline-option.component';

describe('PipelineOptionComponent', () => {
  let component: PipelineOptionComponent;
  let fixture: ComponentFixture<PipelineOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
