import { Customer, CustomerType } from "./../src/enum";

describe("enum", () => {
  it("should test the enum", () => {
    const customer: Customer = {
      id: 1,
      name: "Farhan",
      type: CustomerType.REGULAR,
    };

    console.info(customer);
  });
});
