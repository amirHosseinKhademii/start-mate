import { useToggle } from "hooks";
import { act } from "react-test-renderer";
import { useHook } from "test";

describe("USE TOGGLE", () => {
  const { rerender, result } = useHook(useToggle, false);
  it("should toggle properly", () => {
    expect(result.current.open).toBe(false);
    act(() => {
      rerender(result.current.toggle());
    });
    expect(result.current.open).toBe(true);
  });
});
