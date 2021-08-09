import { setUp, slotFinder } from "test/utils";
import { Suspencer } from ".";
describe("Suspencer", () => {
  let component;
  beforeEach(() => (component = setUp(Suspencer, { children: <p>test</p> })));
  it("SHOULD RENDER THE LOADING", () =>
    expect(component.find("p").text()).toBe("test"));
});
