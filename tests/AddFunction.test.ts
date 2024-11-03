import { AddFunction } from "./../src/function-interface";

describe("AddFunc", () => {
  it("should add a function", () => {
    const add: AddFunction = (a: number, b: number) => {
      return a + b;
    };
    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable array interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names = ["a", "b", "c", "d", "e"];
    console.info(names);
  });

  it("should support object", () => {
    interface StringObject {
      [key: string]: string;
    }
    const dictionary: StringObject = {
      name: "Farhan",
      age: "25",
    };

    expect(dictionary.name).toBe("Farhan");
    expect(dictionary.age).toBe("25");
  });
});
