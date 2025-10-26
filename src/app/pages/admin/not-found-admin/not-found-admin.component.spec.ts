import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundAdminComponent } from './not-found-admin.component';

describe('NotFoundAdminComponent', () => {
  let component: NotFoundAdminComponent;
  let fixture: ComponentFixture<NotFoundAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
