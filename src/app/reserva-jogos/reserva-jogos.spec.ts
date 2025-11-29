import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaJogos } from './reserva-jogos';

describe('ReservaJogos', () => {
  let component: ReservaJogos;
  let fixture: ComponentFixture<ReservaJogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaJogos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaJogos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
