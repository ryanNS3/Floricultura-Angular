import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BotaoSecundary } from "./botao-secundary";

describe("BotaoSecundary", () => {
  let component: BotaoSecundary;
  let fixture: ComponentFixture<BotaoSecundary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoSecundary],
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoSecundary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
