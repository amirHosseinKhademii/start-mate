import { Drawer } from "components";
import { classFinder, setUp, slotFinder } from "test";

describe("Drawer", () => {
  let component;
  beforeEach(() => {
    component = setUp(Drawer, { open: true, children: <p>test</p> });
  });
  it("SHOULD RENDER WRAPPER", () => {
    const wrapper = slotFinder(component, "wrapper");
    expect(wrapper).toHaveLength(1);
  });
  it("SHOULD RENDER W-72 CLASSNAME", () => {
    const wrapper = classFinder(component, ".w-72");
    expect(wrapper).toHaveLength(1);
  });
  it("SHOULD RENDER CHILDREN", () => {
    const wrapper = component.find("p");
    expect(wrapper.text()).toBe("test");
  });
});
