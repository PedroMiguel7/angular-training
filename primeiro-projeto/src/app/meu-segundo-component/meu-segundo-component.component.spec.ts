import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponentComponent } from './meu-segundo-component.component';

describe('MeuSegundoComponentComponent', () => {
  let component: MeuSegundoComponentComponent;
  let fixture: ComponentFixture<MeuSegundoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuSegundoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuSegundoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
