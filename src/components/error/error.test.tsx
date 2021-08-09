import { Error } from ".";
import { idFinder, setUp, slotFinder } from "test";

describe("Error", () => {
  let component;
  beforeEach(() => (component = setUp(Error, { error: "test" })));

  it("SHOULD RENDER WRAPPER", () => {
    const wrapper = slotFinder(component, "wrapper");
    expect(wrapper).toHaveLength(1);
  });
  it("SHOULD RENDER NOTHING WHEN PROPS IS UNDEFINED", () => {
    const wrapper = idFinder(setUp(Error, {}), "error");
    expect(wrapper).toHaveLength(0);
  });
});
