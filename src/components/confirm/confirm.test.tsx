import { roleFinder, setUp, slotFinder } from "test";
import { Confirm } from ".";

describe("Confirm", () => {
  let component;
  beforeEach(() => {
    component = setUp(Confirm, { title: "title", description: "description" });
  });
  it("SHOULD RENDER THE WRAPPER", () => {
    const wrapper = slotFinder(component, "dialog");
    expect(wrapper).toHaveLength(1);
  });
  it("SHOULD RENDER THE TITLE", () => {
    const title = slotFinder(component, "title");
    expect(title.text()).toBe("title");
  });
  it("SHOULD RENDER THE DESC", () => {
    const desc = slotFinder(component, "description");
    expect(desc.text()).toBe("description");
  });
  it("SHOULD RENDER THE CANCEL BUTTON", () => {
    const cancel = roleFinder(component, "cancel");
    expect(cancel.text()).toBe("Cancel");
  });
  it("SHOULD RENDER THE CONFIRM BUTTON", () => {
    const confirm = roleFinder(component, "confirm");
    expect(confirm.text()).toBe("Confirm");
  });
});
