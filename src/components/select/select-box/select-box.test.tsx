import { roleFinder, setUp, slotFinder } from "test/utils";
import { SelectBox } from ".";

describe("Select box", () => {
  let component;
  beforeEach(() => (component = setUp(SelectBox, { value: "test" })));
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER THE ARROW DOWN ICON", () =>
    expect(roleFinder(component, "arrow-down")).toHaveLength(1));
  it("SHOULD RENDER THE DELETE ICON", () =>
    expect(roleFinder(component, "delete")).toHaveLength(1));
  it("SHOULD RENDER THE TOGGLER", () =>
    expect(roleFinder(component, "toggler")).toHaveLength(1));
});
