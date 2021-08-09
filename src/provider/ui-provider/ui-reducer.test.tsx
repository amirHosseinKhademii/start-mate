import { render, fireEvent } from "@testing-library/react";
import { useReducer } from "react";
import { initialState } from "./state";
import { reducer } from "./reducer";
import { uiTypes } from "./types";

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        {state.drawer.open ? (
          <p>Drawer Opened</p>
        ) : (
          <p>Waiting for Open Drawer...</p>
        )}
      </div>
      <div>
        {state.dialog.open ? (
          <p>Dialog Opened</p>
        ) : (
          <p>Waiting for Open Dialog...</p>
        )}
      </div>
      <div>
        {state.dialog.type ? (
          <p>{state.dialog.type}</p>
        ) : (
          <p>Waiting for Open with type...</p>
        )}
      </div>
      <button
        role="drawer"
        onClick={() => dispatch({ type: uiTypes.TOGGLE_DRAWER, payload: "" })}
      >
        Toggle Drawer
      </button>
      <button
        role="dialog"
        onClick={() =>
          dispatch({ type: uiTypes.TOGGLE_DIALOG, payload: { open: true } })
        }
      >
        Toggle Dialog
      </button>
      <button
        role="type"
        onClick={() =>
          dispatch({
            type: uiTypes.TOGGLE_DIALOG,
            payload: { open: true, type: "confirm" },
          })
        }
      >
        Toggle Dialog with type
      </button>
    </div>
  );
};
describe("UI Reducer", () => {
  it("SHOW OPEN AFTER  OPEN DRAWER", () => {
    const { getByText, getByRole } = render(<Example />);
    expect(getByText(/Waiting for Open Drawer/i)).toBeInTheDocument();
    fireEvent.click(getByRole("drawer"));
    expect(getByText("Drawer Opened")).toBeInTheDocument();
  });
  it("SHOW OPEN AFTER  OPEN DIALOG", () => {
    const { getByText, getByRole } = render(<Example />);
    expect(getByText(/Waiting for Open Dialog/i)).toBeInTheDocument();
    fireEvent.click(getByRole("dialog"));
    expect(getByText("Dialog Opened")).toBeInTheDocument();
  });
  it("SHOW TYPE AFTER  OPEN DIALOG", () => {
    const { getByText, getByRole } = render(<Example />);
    expect(getByText(/Waiting for Open with type/i)).toBeInTheDocument();
    fireEvent.click(getByRole("type"));
    expect(getByText("confirm")).toBeInTheDocument();
  });
});
