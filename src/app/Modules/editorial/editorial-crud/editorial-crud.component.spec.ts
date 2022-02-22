import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialCrudComponent } from './editorial-crud.component';

describe('EditorialCrudComponent', () => {
  let component: EditorialCrudComponent;
  let fixture: ComponentFixture<EditorialCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
