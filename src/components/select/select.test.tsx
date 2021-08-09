import { setUp, slotFinder } from "test/utils";
import { Select } from ".";

describe("Select", () => {
  let component;
  beforeEach(() => (component = setUp(Select, { label: "test" })));
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER THE LABEL", () =>
    expect(slotFinder(component, "label")).toHaveLength(1));
});
