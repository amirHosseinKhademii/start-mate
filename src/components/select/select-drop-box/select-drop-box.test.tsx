import { roleFinder, setUp, slotFinder } from "test/utils";
import { SelectDropBox } from ".";

describe("Select drop box", () => {
  let component;
  beforeEach(
    () => (component = setUp(SelectDropBox, { children: <p>test</p> }))
  );
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER THE ARROW DOWN", () =>
    expect(roleFinder(component, "arrow-up")).toHaveLength(1));
});
