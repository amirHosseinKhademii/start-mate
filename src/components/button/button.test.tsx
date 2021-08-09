import { Button } from ".";
import { idFinder, setUp, classFinder, typeFinder, useTree } from "test";

describe("Button", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(Button, {
        disabled: true,
        children: <p className="children-test">test</p>,
        type: "submit",
      }))
  );
  // it("SHOUD Match <Button/> TO SNAPSHOT", () => {
  //   let button = useTree(Button);
  //   expect(button).toMatchSnapshot();
  // });
  it("SHOUD RENDER BUTTON", () => {
    const wrapper = component.find("button");
    expect(wrapper.length).toBe(1);
  });
  it("SHOUD RENDER OPACITY 50 % ON DISABLED MODE", () => {
    const wrapper = classFinder(component, ".opacity-50");
    expect(wrapper.length).toBe(1);
  });
  it("SHOUD RENDER CHILDREN WITH CERTAIN CLASS", () => {
    const wrapper = classFinder(component, ".children-test");
    expect(wrapper.length).toBe(1);
  });
  it("SHOUD RENDER BUTTON WITH TYPE SUBMIT", () => {
    const wrapper = typeFinder(component, "submit");
    expect(wrapper.length).toBe(1);
  });
});
