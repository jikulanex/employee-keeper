import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSkillFormComponent } from './update-skill-form.component';

describe('UpdateSkillFormComponent', () => {
  let component: UpdateSkillFormComponent;
  let fixture: ComponentFixture<UpdateSkillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSkillFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSkillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
