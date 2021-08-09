import { roleFinder, setUp, slotFinder } from "test/utils";
import { Pagination } from ".";

describe("Pagination", () => {
  let component;
  beforeEach(() => (component = setUp(Pagination, { total: 20 })));
  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
  it("SHOULD RENDER TWO PAGINATOR", () =>
    expect(slotFinder(component, "paginator")).toHaveLength(2));
  it("SHOULD RENDER THE PAGINATOR", () =>
    expect(roleFinder(component, "right-arrow")).toHaveLength(1));
  it("SHOULD RENDER THE PAGINATOR", () =>
    expect(roleFinder(component, "left-arrow")).toHaveLength(1));
});
