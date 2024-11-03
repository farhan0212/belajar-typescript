describe("union", () => {
  it("should support union", () => {
    let sample: number | string = "farhan";

    sample = 100;
    sample = "100";

    console.log(sample);
  });

  it("union", () => {
    const process = (value: number | string | boolean) => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      } else {
        return !value;
      }
    };
    expect(process(15)).toBe(30);
    expect(process("farhan")).toBe("FARHAN");
    expect(process(true)).toBe(false);
  });
});
