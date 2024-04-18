import { StringConverting } from "./StringConverting";
import { SortingParams } from "./types";

describe("StringConverting.toInteger()", () => {
  const inputData: {
    name: string;
    str: string | undefined;
    def: number;
    expected: number;
  }[] = [
    { name: "Should return coverted value", str: "3", def: 10, expected: 3 },
    {
      name: "Should return default value cuz string sets",
      str: "asd",
      def: 10,
      expected: 10,
    },
    {
      name: "Should return default value cuz float sets",
      str: "16.5",
      def: 10,
      expected: 10,
    },
    {
      name: "Should return default value cuz undefined sets",
      str: undefined,
      def: 10,
      expected: 10,
    },
  ];

  inputData.forEach((item) => {
    it(item.name, () => {
      const result = StringConverting.toInteger(item.def, item.str);
      expect(result).toBe(item.expected);
    });
  });
});

describe("StringConverting.toBoolean()", () => {
  const inputData: {
    name: string;
    str: string | undefined;
    expected: boolean | undefined;
  }[] = [
    { name: "Should return true", str: "1", expected: true },
    { name: "Should return false", str: "0", expected: false },
    {
      name: "Should return undefined cuz value is empty",
      str: "",
      expected: undefined,
    },
    {
      name: "Should return undefined cuz value is invalid",
      str: "asd",
      expected: undefined,
    },
    {
      name: "Should return undefined cuz value is undefined",
      str: undefined,
      expected: undefined,
    },
  ];

  inputData.forEach((item) => {
    it(item.name, () => {
      const result = StringConverting.toBoolean(item.str);
      expect(result).toBe(item.expected);
    });
  });
});

describe("StringConverting.toSortingArray()", () => {
  const inputData: {
    name: string;
    str: string | undefined;
    expected: SortingParams;
  }[] = [
    {
      name: "Should return parsed sorting params object",
      str: "title:asc;createdAt:desc",
      expected: { title: "asc", createdAt: "desc" },
    },
    {
      name: "Should return empty object cuz order paramis is invalid",
      str: "createdAt:asd",
      expected: {},
    },
    {
      name: "Should return empty object cuz sort param is invalid",
      str: "asd",
      expected: {},
    },
    {
      name: "Should return empty object cuz params are undefined",
      str: undefined,
      expected: {},
    },
  ];

  inputData.forEach((item) => {
    it(item.name, () => {
      const result = StringConverting.toSortingArr(item.str);
      expect(result).toEqual(item.expected);
    });
  });
});
