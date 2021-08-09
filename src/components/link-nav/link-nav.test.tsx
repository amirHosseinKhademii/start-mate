import { classFinder, setUp, slotFinder } from "test";
import { LinkNav } from ".";

describe("LinkNav", () => {
  let component;
  beforeEach(() => {
    component = setUp(LinkNav, { size: "title", children: <p>test</p> });
  });

  it("SHOULD RENDER WRAPPER", () => {
    expect(slotFinder(component, "wrapper")).toHaveLength(1);
  });
  it("SHOULD RENDER LARGE", () => {
    expect(classFinder(component, ".text-lg")).toHaveLength(1);
  });
  it("SHOULD RENDER CHILDREN", () => {
    expect(component.find("p").text()).toBe("test");
  });
});
