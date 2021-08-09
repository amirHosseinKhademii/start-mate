import { classFinder, setUp, slotFinder } from "test";
import { Input } from ".";

describe("Input", () => {
  let component;
  beforeEach(() => {
    component = setUp(Input, {
      label: "label-test",
      withError: true,
      size: "large",
      disabled: true,
      className: "test-class",
    });
  });
  it("SHOULD RENDER WRAPPER", () => {
    expect(slotFinder(component, "wrapper")).toHaveLength(1);
  });
  it("SHOULD RENDER LABEL", () => {
    expect(slotFinder(component, "label").text()).toBe("label-test");
  });
  it("SHOULD RENDER RED BORDER", () => {
    expect(classFinder(component, ".border-red-400")).toHaveLength(1);
  });
  it("SHOULD RENDER LARGE", () => {
    expect(classFinder(component, ".h-14")).toHaveLength(1);
  });
  it("SHOULD RENDER DISABLED", () => {
    expect(classFinder(component, ".bg-gray-200")).toHaveLength(1);
  });
  it("SHOULD RENDER CLASSNAME", () => {
    expect(classFinder(component, ".test-class")).toHaveLength(1);
  });
});
