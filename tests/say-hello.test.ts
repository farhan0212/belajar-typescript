import { Hello } from "../src/say-hello";

describe("Hello", () => {
  it("should say hello farhan", () => {
    expect(Hello("Farhan")).toBe("Hello, Farhan!");
  });
});
