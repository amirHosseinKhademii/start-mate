import { DropDown } from ".";
import { idFinder, classFinder, setUp } from "test";
import { render, fireEvent } from "@testing-library/react";

describe("DropDown", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(DropDown, {
        active: true,
        children: <p className="drop-down-test">test</p>,
      }))
  );
  // it("SHOUD Match <DropDownOption/> TO SNAPSHOT", () => {
  //   let dropDown = useTree(DropDown);
  //   expect(dropDown).toMatchSnapshot();
  // });
  it("SHOULD RENDER WRAPPER", () => {
    const wrapper = idFinder(component, "drop-down");
    expect(wrapper.length).toBe(1);
  });
  it("SHOULD RENDER ARROW UP ICON WHEN IS ACTIVE", () => {
    const icon = idFinder(component, "close");
    expect(icon.length).toBe(1);
  });
  it("SHOULD RENDER CHILDREN", () => {
    const icon = classFinder(component, ".drop-down-test");
    expect(icon).toHaveLength(1);
  });
  it("Show add a transaction after click", () => {
    const { getByRole } = render(<DropDown />);
    fireEvent.click(getByRole("button"));
    expect(getByRole("close")).toBeInTheDocument();
  });
});
