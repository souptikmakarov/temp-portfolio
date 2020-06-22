import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiHomepageComponent } from './poi-homepage.component';

describe('PoiHomepageComponent', () => {
  let component: PoiHomepageComponent;
  let fixture: ComponentFixture<PoiHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoiHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoiHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
