import { renderHook } from "@testing-library/react-hooks";
import { useValidation } from ".";

describe("Use validation", () => {
  const hook = renderHook(() =>
    useValidation({ required: true, min: 3, max: 6 })
  );
  it("SHOULD RETURN ERROR IF VALUE IS NULL", () => {
    const expected = "This field is required.";
    const received = hook.result.current.validate("");
    expect(received).toEqual(expected);
  });
  it("SHOULD RETURN ERROR IF VALUE IS LESSER THAN MIN", () => {
    const expected = "This field must be equal or more than 3 characters.";
    const received = hook.result.current.validate("te");
    expect(received).toEqual(expected);
  });
  it("SHOULD RETURN ERROR IF VALUE IS LONGER THAN MAX", () => {
    const expected = "This field must be equal or less than 6 characters.";
    const received = hook.result.current.validate("testvalue");
    expect(received).toEqual(expected);
  });
});
