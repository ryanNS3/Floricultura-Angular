import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InputPadrao } from "./input-padrao";

describe("InputPadrao", () => {
  let component: InputPadrao;
  let fixture: ComponentFixture<InputPadrao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPadrao],
    }).compileComponents();

    fixture = TestBed.createComponent(InputPadrao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
