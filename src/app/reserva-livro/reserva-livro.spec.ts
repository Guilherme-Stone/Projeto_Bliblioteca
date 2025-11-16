import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaLivro } from './reserva-livro';

describe('ReservaLivro', () => {
  let component: ReservaLivro;
  let fixture: ComponentFixture<ReservaLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaLivro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
