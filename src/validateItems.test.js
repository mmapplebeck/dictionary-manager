import { Map, List } from "immutable";

import * as module from "./validateItems";
import DictionaryItem from "./models/DictionaryItem";
import { ErrorNames, ErrorLevels } from "./models/Errors";

const { validateItem } = module;

describe("validateItem", () => {
  it("should not return an error if there is none", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey"]),
      "Carribean Sea": List(["Turquoise"])
    });
    const domainsByRange = Map({
      "Dark Grey": List(["StoneGrey"]),
      Turquoise: List(["Carribean Sea"])
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    expect(errors).toEqual(List());
  });

  it("should return a cycle error if there is a cycle", () => {
    const item = DictionaryItem({
      domain: "Dark Grey",
      range: "Stonegrey"
    });
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey"]),
      "Dark Grey": List(["Stonegrey"]),
      "Midnight Blue": List(["Dark Blue"])
    });
    const domainsByRange = Map({
      "Dark Grey": List(["Stonegrey"]),
      Stonegrey: List(["Darkgrey"]),
      "Dark Blue": List(["Midnight Blue"])
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    expect(errors.size).toBe(1);
    expect(errors.get(0).name).toBe(ErrorNames.cycle);
    expect(errors.get(0).level).toBe(ErrorLevels.error);
  });

  it("should return a chain error if there is a chain", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey"]),
      "Dark Grey": List(["Anthracite"]),
      "Midnight Blue": List(["Dark Blue"])
    });
    const domainsByRange = Map({
      "Dark Grey": List(["Stonegrey"]),
      Anthracite: List(["Dark Grey"]),
      "Dark Blue": List(["Midnight Blue"])
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    expect(errors.size).toBe(1);
    expect(errors.get(0).name).toBe(ErrorNames.chain);
    expect(errors.get(0).level).toBe(ErrorLevels.warning);
  });

  it("should return a fork error if there is a fork", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey", "Anthracite"]),
      "Midnight Blue": List(["Dark Blue"])
    });
    const domainsByRange = Map({
      "Dark Grey": List(["Stonegrey"]),
      Anthracite: List(["Stonegrey"]),
      "Dark Blue": List("Midnight Blue")
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    expect(errors.size).toBe(1);
    expect(errors.get(0).name).toBe(ErrorNames.fork);
    expect(errors.get(0).level).toBe(ErrorLevels.warning);
  });

  it("should return a duplicate error if there is a duplicate", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey", "Dark Grey"]),
      "Carribean Sea": List(["Turquoise"])
    });
    const domainsByRange = Map({
      "Dark Grey": List(["Stonegrey", "Stonegrey"]),
      Turquoise: List(["Carribean Sea"])
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    expect(errors.size).toBe(1);
    expect(errors.get(0).name).toBe(ErrorNames.duplicate);
    expect(errors.get(0).level).toBe(ErrorLevels.warning);
  });

  it("should add all relevant errors to an item", () => {
    const item = DictionaryItem({
      domain: "a",
      range: "b"
    });
    const rangesByDomain = Map({
      a: List(["b", "b", "c"]),
      b: List(["a", "c"])
    });
    const domainsByRange = Map({
      a: List(["b"]),
      b: List(["a", "a"]),
      c: List(["a", "b"])
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    const errorNames = errors.map(e => e.name).toSet();
    expect(errors.size).toBe(4);
    expect(errorNames.has(ErrorNames.duplicate)).toBe(true);
    expect(errorNames.has(ErrorNames.fork)).toBe(true);
    expect(errorNames.has(ErrorNames.cycle)).toBe(true);
    expect(errorNames.has(ErrorNames.chain)).toBe(true);
  });

  it("should add error to the second item of a chain", () => {
    const item = DictionaryItem({
      domain: "b",
      range: "c"
    });
    const rangesByDomain = Map({
      a: List(["b"]),
      b: List(["c"])
    });
    const domainsByRange = Map({
      b: List(["a"]),
      c: List(["b"])
    });
    const errors = validateItem(item, rangesByDomain, domainsByRange);
    expect(errors.size).toBe(1);
    expect(errors.get(0).name).toBe(ErrorNames.chain);
  });
});

describe("validateItems", () => {
  let validateItemSpy;
  const items = List([
    DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    }),
    DictionaryItem({
      domain: "Dark Grey",
      range: "Stonegrey"
    }),
    DictionaryItem({
      domain: "Midnight Blue",
      range: "Dark Blue"
    })
  ]);
  const rangesByDomain = Map({
    Stonegrey: List(["Dark Grey"]),
    "Dark Grey": List(["Stonegrey"]),
    "Midnight Blue": List(["Dark Blue"])
  });
  const domainsByRange = Map({
    "Dark Grey": List(["Stonegrey"]),
    Stonegrey: List(["Dark Grey"]),
    "Dark Blue": List(["Midnight Blue"])
  });

  beforeEach(() => {
    validateItemSpy = jest.spyOn(module, "validateItem");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should pass the correct arguments", () => {
    module.validateItems(items);
    items.forEach((item, i) => {
      expect(validateItemSpy).toHaveBeenNthCalledWith(
        i + 1,
        item,
        rangesByDomain,
        domainsByRange
      );
    });
  });

  it("should be called for every item", () => {
    module.validateItems(items);
    expect(validateItemSpy).toHaveBeenCalledTimes(items.size);
  });

  it("should return the items with errors", () => {
    const itemsWithErrors = module.validateItems(items);
    expect(itemsWithErrors.get(0).errors.get(0).name).toBe(ErrorNames.cycle);
    expect(itemsWithErrors.get(1).errors.get(0).name).toBe(ErrorNames.cycle);
    expect(itemsWithErrors.get(2).errors).toEqual(List([]));
  });
});
