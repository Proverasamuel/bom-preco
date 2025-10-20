import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogiosComponent } from './relogios.component';

describe('RelogiosComponent', () => {
  let component: RelogiosComponent;
  let fixture: ComponentFixture<RelogiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelogiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelogiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
