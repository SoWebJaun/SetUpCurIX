import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLayerTreeViewComponent } from './service-layer-tree-view.component';

describe('ServiceLayerTreeViewComponent', () => {
  let component: ServiceLayerTreeViewComponent;
  let fixture: ComponentFixture<ServiceLayerTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLayerTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLayerTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
