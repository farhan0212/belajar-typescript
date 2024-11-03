describe("Any", () => {
  it("should return true for any type", () => {
    const person: any = {
      id: 1,
      name: "Farhan",
      age: 25,
      isEmployed: true,
    };
    person.age = "31";

    console.log(person);
  });
});
