import * as module from "./validateDictionaryItems";
import {
  CycleError,
  ChainError,
  ForkError,
  DuplicateError
} from "./models/Errors";

const { validateItem } = module;

describe("validateItem", () => {
  it("should not return an error if there is none", () => {
    const item = {
      domain: "Stonegrey",
      range: "Dark Grey"
    };
    const domains = new Set(["Stonegrey", "Carribean Sea"]);
    const rangesByDomain = {
      Stonegrey: ["Dark Grey"],
      "Carribean Sea": ["Turquoise"]
    };
    const error = validateItem(item, domains, rangesByDomain);
    expect(error).toBe(null);
  });

  it("should return a cycle error if there is a cycle", () => {
    const item = {
      domain: "Dark Grey",
      range: "Stonegrey"
    };
    const domains = new Set(["Stonegrey", "Dark Grey", "Midnight Blue"]);
    const rangesByDomain = {
      Stonegrey: ["Dark Grey"],
      "Dark Grey": ["Stonegrey"],
      "Midnight Blue": ["Dark Blue"]
    };
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof CycleError).toBe(true);
  });

  it("should return a chain error if there is a chain", () => {
    const item = {
      domain: "Stonegrey",
      range: "Dark Grey"
    };
    const domains = new Set(["Stonegrey", "Dark Grey", "Midnight Blue"]);
    const rangesByDomain = {
      Stonegrey: ["Dark Grey"],
      "Dark Grey": ["Anthracite"],
      "Midnight Blue": ["Dark Blue"]
    };
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof ChainError).toBe(true);
  });

  it("should return a fork error if there is a fork", () => {
    const item = {
      domain: "Stonegrey",
      range: "Dark Grey"
    };
    const domains = new Set(["Stonegrey", "Midnight Blue"]);
    const rangesByDomain = {
      Stonegrey: ["Dark Grey", "Anthracite"],
      "Midnight Blue": ["Dark Blue"]
    };
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof ForkError).toBe(true);
  });

  it("should return a duplicate error if there is a duplicate", () => {
    const item = {
      domain: "Stonegrey",
      range: "Dark Grey"
    };
    const domains = new Set(["Stonegrey", "Carribean Sea"]);
    const rangesByDomain = {
      Stonegrey: ["Dark Grey", "Dark Grey"],
      "Carribean Sea": ["Turquoise"]
    };
    const error = validateItem(item, domains, rangesByDomain);
    expect(error instanceof DuplicateError).toBe(true);
  });

  describe("error priority", () => {
    it("should find cycle before chain", () => {
      const item = {
        domain: "Stonegrey",
        range: "Dark Grey"
      };
      const domains = new Set(["Stonegrey", "Dark Grey"]);
      const rangesByDomain = {
        Stonegrey: ["Dark Grey"],
        "Dark Grey": ["Anthracite", "Stonegrey"]
      };
      const error = validateItem(item, domains, rangesByDomain);
      expect(error instanceof CycleError).toBe(true);
    });

    it("should find chain before fork", () => {
      const item = {
        domain: "Stonegrey",
        range: "Dark Grey"
      };
      const domains = new Set(["Stonegrey", "Dark Grey"]);
      const rangesByDomain = {
        Stonegrey: ["Dark Grey", "Anthracite"],
        "Dark Grey": ["Anthracite"]
      };
      const error = validateItem(item, domains, rangesByDomain);
      console.log("ERROR", error);
      expect(error instanceof ChainError).toBe(true);
    });

    it("should find fork before duplicate", () => {
      const item = {
        domain: "Stonegrey",
        range: "Dark Grey"
      };
      const domains = new Set(["Stonegrey"]);
      const rangesByDomain = {
        Stonegrey: ["Dark Grey", "Dark Grey", "Anthracite"]
      };
      const error = validateItem(item, domains, rangesByDomain);
      expect(error instanceof ForkError).toBe(true);
    });
  });
});

describe("addErrors", () => {
  let validateItemSpy;
  const items = [
    {
      domain: "Stonegrey",
      range: "Dark Grey"
    },
    {
      domain: "Dark Grey",
      range: "Stonegrey"
    },
    {
      domain: "Midnight Blue",
      range: "Dark Blue"
    }
  ];
  const domains = new Set(["Stonegrey", "Dark Grey", "Midnight Blue"]);
  const rangesByDomain = {
    Stonegrey: ["Dark Grey"],
    "Dark Grey": ["Stonegrey"],
    "Midnight Blue": ["Dark Blue"]
  };

  beforeEach(() => {
    validateItemSpy = jest.spyOn(module, "validateItem");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should pass the correct arguments", () => {
    module.addErrors(items);
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
    module.addErrors(items);
    expect(validateItemSpy).toHaveBeenCalledTimes(items.length);
  });

  it("should return the items with errors", () => {
    const itemsWithErrors = module.addErrors(items);
    expect(itemsWithErrors[0].error instanceof CycleError).toBe(true);
    expect(itemsWithErrors[1].error instanceof CycleError).toBe(true);
    expect(itemsWithErrors[2].error).toBe(null);
  });
});
