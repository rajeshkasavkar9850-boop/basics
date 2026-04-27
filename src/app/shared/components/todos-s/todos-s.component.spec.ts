import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSComponent } from './todos-s.component';

describe('TodosSComponent', () => {
  let component: TodosSComponent;
  let fixture: ComponentFixture<TodosSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
