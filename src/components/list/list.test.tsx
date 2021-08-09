import { setUp, slotFinder } from "test";
import { List } from ".";

describe("List", () => {
  let component;
  beforeEach(() => {
    component = setUp(List, { children: <p>test-child</p> });
  });
  it("SHOULD RENDER WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER CHILDREN", () =>
    expect(component.find("p").text()).toBe("test-child"));
});
