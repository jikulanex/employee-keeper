import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFormHomeComponent } from './skills-form-home.component';

describe('SkillsFormHomeComponent', () => {
  let component: SkillsFormHomeComponent;
  let fixture: ComponentFixture<SkillsFormHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsFormHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
