import { setUp, slotFinder } from "test/utils";
import { ListItem } from ".";

describe("List Item", () => {
  let component;
  beforeEach(() => {
    component = setUp(ListItem, { children: <p>test</p> });
  });
  it("SHOULD RENDER WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
});
