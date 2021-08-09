import { render, screen } from "@testing-library/react";
import { UiContext } from "provider/ui-provider";
import { initialState } from "./state";

const customRender = (props: { consumer?: any; state?: any }) => {
  const { consumer, state } = props;
  return render(
    <UiContext.Provider value={state}>{consumer}</UiContext.Provider>
  );
};

describe("Use Ui", () => {
  test("Consumer shows value from provider", () => {
    customRender({
      consumer: (
        <UiContext.Consumer>
          {({ dialog }) => (
            <span>{dialog.type !== undefined && "Working"}</span>
          )}
        </UiContext.Consumer>
      ),
      state: initialState,
    });
    expect(screen.getByText("Working")).toBeInTheDocument();
  });
});
