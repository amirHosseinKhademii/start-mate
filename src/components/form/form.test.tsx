import { setUp, slotFinder } from "test";
import { Form } from ".";

describe("Form", () => {
  let component;
  beforeEach(() => {
    component = setUp(Form, { children: "some child" });
  });
  it("SHOULD RENDER WRAPPER", () => {
    expect(slotFinder(component, "wrapper")).toHaveLength(1);
  });
  it("SHOULD RENDER CHILDREN", () => {
    expect(slotFinder(component, "children")).toHaveLength(1);
  });
});
