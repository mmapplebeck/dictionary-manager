import { Set, Map, List } from "immutable";

import * as module from "./validateItems";
import DictionaryItem from "./models/DictionaryItem";
import {
  CycleError,
  ChainError,
  ForkError,
  DuplicateError
} from "./models/Errors";

const { validateItem } = module;

describe("validateItem", () => {
  it("should not return an error if there is none", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const domains = Set(["Stonegrey", "Carribean Sea"]);
    const rangesByDomain = Map({
      Stonegrey: ["Dark Grey"],
      "Carribean Sea": ["Turquoise"]
    });
    const error = validateItem(item, domains, rangesByDomain);
    expect(error).toBe(null);
  });

  it("should return a cycle error if there is a cycle", () => {
    const item = DictionaryItem({
      domain: "Dark Grey",
      range: "Stonegrey"
    });
    const domains = Set(["Stonegrey", "Dark Grey", "Midnight Blue"]);
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey"]),
      "Dark Grey": List(["Stonegrey"]),
      "Midnight Blue": List(["Dark Blue"])
    });
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof CycleError).toBe(true);
  });

  it("should return a chain error if there is a chain", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const domains = Set(["Stonegrey", "Dark Grey", "Midnight Blue"]);
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey"]),
      "Dark Grey": List(["Anthracite"]),
      "Midnight Blue": List(["Dark Blue"])
    });
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof ChainError).toBe(true);
  });

  it("should return a fork error if there is a fork", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const domains = Set(["Stonegrey", "Midnight Blue"]);
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey", "Anthracite"]),
      "Midnight Blue": List(["Dark Blue"])
    });
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof ForkError).toBe(true);
  });

  it("should return a duplicate error if there is a duplicate", () => {
    const item = DictionaryItem({
      domain: "Stonegrey",
      range: "Dark Grey"
    });
    const domains = Set(["Stonegrey", "Carribean Sea"]);
    const rangesByDomain = Map({
      Stonegrey: List(["Dark Grey", "Dark Grey"]),
      "Carribean Sea": List(["Turquoise"])
    });
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof DuplicateError).toBe(true);
  });

  describe("error priority", () => {
    it("should find cycle before chain", () => {
      const item = DictionaryItem({
        domain: "Stonegrey",
        range: "Dark Grey"
      });
      const domains = Set(["Stonegrey", "Dark Grey"]);
      const rangesByDomain = Map({
        Stonegrey: List(["Dark Grey"]),
        "Dark Grey": List(["Anthracite", "Stonegrey"])
      });
      const error = validateItem(item, domains, rangesByDomain);
      expect(error instanceof CycleError).toBe(true);
    });

    it("should find chain before fork", () => {
      const item = DictionaryItem({
        domain: "Stonegrey",
        range: "Dark Grey"
      });
      const domains = Set(["Stonegrey", "Dark Grey"]);
      const rangesByDomain = Map({
        Stonegrey: List(["Dark Grey", "Anthracite"]),
        "Dark Grey": List(["Anthracite"])
      });
      const error = validateItem(item, domains, rangesByDomain);
      expect(error instanceof ChainError).toBe(true);
    });

    it("should find fork before duplicate", () => {
      const item = DictionaryItem({
        domain: "Stonegrey",
        range: "Dark Grey"
      });
      const domains = Set(["Stonegrey"]);
      const rangesByDomain = Map({
        Stonegrey: List(["Dark Grey", "Dark Grey", "Anthracite"])
      });
      const error = validateItem(item, domains, rangesByDomain);
      expect(error instanceof ForkError).toBe(true);
    });
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
  const domains = Set(["Stonegrey", "Dark Grey", "Midnight Blue"]);
  const rangesByDomain = Map({
    Stonegrey: List(["Dark Grey"]),
    "Dark Grey": List(["Stonegrey"]),
    "Midnight Blue": List(["Dark Blue"])
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
        domains,
        rangesByDomain
      );
    });
  });

  it("should be called for every item", () => {
    module.validateItems(items);
    expect(validateItemSpy).toHaveBeenCalledTimes(items.size);
  });

  it("should return the items with errors", () => {
    const itemsWithErrors = module.validateItems(items);
    expect(itemsWithErrors.get(0).error instanceof CycleError).toBe(true);
    expect(itemsWithErrors.get(1).error instanceof CycleError).toBe(true);
    expect(itemsWithErrors.get(2).error).toBe(null);
  });
});
