import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InputCadastro } from "./input-cadastro";

describe("InputCadastro", () => {
  let component: InputCadastro;
  let fixture: ComponentFixture<InputCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
