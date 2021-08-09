import { setUp, slotFinder } from "test/utils";
import { Table } from ".";

describe("Table", () => {
  let component;
  beforeEach(() => (component = setUp(Table, { data: [] })));

  it("SHOULD RENDER THE WRAPPER", () =>
    expect(slotFinder(component, "wrapper")).toHaveLength(1));
});
