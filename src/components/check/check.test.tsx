import { setUp, slotFinder, roleFinder, classFinder } from "test";
import { Check } from ".";

describe("Check", () => {
  let component;
  beforeEach(() => {
    component = setUp(Check, { checked: true, className: "test" });
  });
  it("SHOULD RENDER THE WRAPPER", () => {
    const wrapper = slotFinder(component, "wrapper");
    expect(wrapper).toHaveLength(1);
  });
  it("SHOULD RENDER THE CHECKED ICON WHEN IS ACTIVE", () => {
    const checked = roleFinder(component, "checked");
    expect(checked).toHaveLength(1);
  });
  it("SHOULD RENDER THE IINDIGO BG WHEN IS ACTIVED", () => {
    const blue = classFinder(component, ".bg-indigo-600");
    expect(blue).toHaveLength(1);
  });
  it("SHOULD RENDER THE CLASSNAME WHEN PASSED", () => {
    const test = classFinder(component, ".test");
    expect(test).toHaveLength(1);
  });
});
