import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveclrComponent } from './activeclr.component';

describe('ActiveclrComponent', () => {
  let component: ActiveclrComponent;
  let fixture: ComponentFixture<ActiveclrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveclrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveclrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
