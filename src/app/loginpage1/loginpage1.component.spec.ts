import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginpage1Component } from './loginpage1.component';

describe('Loginpage1Component', () => {
  let component: Loginpage1Component;
  let fixture: ComponentFixture<Loginpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginpage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Loginpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
