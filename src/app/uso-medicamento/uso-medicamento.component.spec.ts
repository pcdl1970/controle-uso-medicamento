import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoMedicamentoComponent } from './uso-medicamento.component';

describe('UsoMedicamentoComponent', () => {
  let component: UsoMedicamentoComponent;
  let fixture: ComponentFixture<UsoMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsoMedicamentoComponent]
    });
    fixture = TestBed.createComponent(UsoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
