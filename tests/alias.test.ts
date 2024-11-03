import { Category, Product, ID } from "./../src/alias";

describe("alias tester", () => {
  it("should test the alias", () => {
    const category: Category = {
      id: 1,
      name: "Electronics",
    };
    const product: Product = {
      id: "2",
      name: "Smartphone",
      price: 1000,
      category,
    };

    console.log(product);
  });
});
