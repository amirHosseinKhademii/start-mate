import { setUp, slotFinder } from "test";
import { Grid } from ".";

describe("Grid", () => {
  let component;
  beforeEach(() => {
    component = setUp(Grid, { children: <p>test</p> });
  });
  it("SHOULD RENDER WRAPPER", () => {
    expect(slotFinder(component, "wrapper")).toHaveLength(1);
  });
  it("SHOULD RENDER CHILDREN", () => {
    expect(component.find("p").text()).toBe("test");
  });
});
