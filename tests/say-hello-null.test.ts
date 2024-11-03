import { sayHello } from "../src/say-hello-null";

describe("say hello null", () => {
  it("shoule say hello Farhan", () => {
    expect(sayHello("Farhan")).toBe("Hello Farhan");
  });
});
