import { setUp, slotFinder } from "test";
import { ModalDom } from "./modal-dom";

describe("Dialog", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(ModalDom, {
        slot: "dialog",
        children: <p>test child</p>,
        onClose: () => {},
      }))
  );
  it("SHOULD RENDER THE DIALOG SLOT", () =>
    expect(slotFinder(component, "dialog")).toHaveLength(1));
  it("SHOULD RENDER THE MODAL SLOT", () =>
    expect(slotFinder(component, "modal")).toHaveLength(1));
  it("SHOULD RENDER THE RIGHT CHILD", () =>
    expect(component.find("p").text()).toBe("test child"));
  it("SHOULD RENDER THE HEADER", () =>
    expect(slotFinder(component, "header")).toHaveLength(1));
});
