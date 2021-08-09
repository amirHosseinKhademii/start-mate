import { classFinder, setUp, slotFinder } from "test/utils";
import { SwitchBox } from ".";

describe("Switch box", () => {
  let component;
  beforeEach(() => (component = setUp(SwitchBox, { open: true })));
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER THE TOGGLE WRAPPER", () =>
    expect(slotFinder(component, "toggle-wrapper")).toHaveLength(1));
  it("SHOULD RENDER THE TOGGLE", () =>
    expect(slotFinder(component, "toggle")).toHaveLength(1));
  it("SHOULD RENDER THE CERTAIN CLASS", () =>
    expect(classFinder(component, ".justify-end")).toHaveLength(1));
});
