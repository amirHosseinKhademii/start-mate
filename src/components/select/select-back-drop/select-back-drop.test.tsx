import { setUp, slotFinder } from "test/utils";
import { SelectBackDrop } from ".";

describe("Select back drop", () => {
  let component;
  beforeEach(() => (component = setUp(SelectBackDrop, {})));
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
});
