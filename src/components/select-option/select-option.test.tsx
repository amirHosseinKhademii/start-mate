import { setUp, slotFinder } from "test/utils";
import { SelectOption } from ".";

describe("Select option", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(SelectOption, {
        multiple: true,
        children: <p>test</p>,
      }))
  );
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER THE CHILD SLOT", () =>
    expect(slotFinder(component, "child")).toHaveLength(1));
  it("SHOULD RENDER THE CHILDREN", () =>
    expect(component.find("p").text()).toBe("test"));
});
