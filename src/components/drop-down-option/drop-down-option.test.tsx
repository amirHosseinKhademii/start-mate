import { DropDownOption } from ".";
import { classFinder, setUp, slotFinder } from "test";

describe("Drop down option", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(DropDownOption, {
        active: true,
        children: <p className="children-class">test</p>,
      }))
  );
  it("SHOULD RENDER WRAPPER", () => {
    const wrapper = slotFinder(component, "wrapper");
    expect(wrapper.length).toBe(1);
  });
  it("SHOULD RENDER CERTIAN CLASS WHEN IS ACTIVE", () => {
    const wrapper = classFinder(component, ".text-cyan-600");
    expect(wrapper.length).toBe(1);
  });
  it("SHOULD RENDER CHILDREN WITH CERTIAN CLASS", () => {
    const wrapper = classFinder(component, ".children-class");
    expect(wrapper.length).toBe(1);
  });
});
